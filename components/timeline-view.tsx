"use client"

import { useState, useRef, useEffect, Suspense } from "react"
import { useLanguage } from "@/lib/language-context"
import { getTimelineEvents } from "@/lib/timeline-data"
import { createFamilyData } from "@/lib/data"
import { cn } from "@/lib/utils"
import { Play, Pause, User, Crown, Heart, Skull, Calendar, Clock, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-mobile"
import { motion, AnimatePresence } from "framer-motion"

// Create a fallback component
function TimelineViewFallback() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center p-4 border-b">
        <div className="h-6 w-48 bg-gray-200 rounded"></div>
        <div className="h-8 w-8 bg-gray-200 rounded"></div>
      </div>
      <div className="flex-1 overflow-hidden p-4">
        <div className="h-full flex justify-center">
          <div className="w-1 bg-gray-200"></div>
          <div className="space-y-8 mt-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="h-4 w-4 rounded-full bg-gray-200"></div>
                <div className="w-64">
                  <div className="h-4 w-32 bg-gray-200 rounded mb-2"></div>
                  <div className="h-12 w-full bg-gray-100 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Create a client component that uses hooks
function TimelineViewContent() {
  const { language, t } = useLanguage()
  const timelineEvents = getTimelineEvents(language)
  const familyData = createFamilyData(language)
  const timelineRef = useRef<HTMLDivElement>(null)
  const [activeEventIndex, setActiveEventIndex] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Sort events by year
  const sortedEvents = [...timelineEvents].sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year
    if (a.month && b.month && a.month !== b.month) return a.month - b.month
    if (a.day && b.day && a.day !== b.day) return a.day - b.day
    return 0
  })

  // Get icon for event type
  const getEventIcon = (type: string) => {
    switch (type) {
      case "birth":
        return <User className="h-5 w-5" />
      case "death":
        return <Skull className="h-5 w-5" />
      case "marriage":
        return <Heart className="h-5 w-5" />
      case "succession":
        return <Crown className="h-5 w-5" />
      default:
        return <Calendar className="h-5 w-5" />
    }
  }

  // Get color for event type
  const getEventColor = (type: string) => {
    switch (type) {
      case "birth":
        return "bg-green-500 text-white"
      case "death":
        return "bg-red-500 text-white"
      case "marriage":
        return "bg-pink-500 text-white"
      case "succession":
        return "bg-purple-500 text-white"
      default:
        return "bg-blue-500 text-white"
    }
  }

  // Scroll to a specific event
  const scrollToEvent = (index: number) => {
    const eventElements = document.querySelectorAll("[data-event-id]")
    if (eventElements[index]) {
      eventElements[index].scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }
  }

  // Handle play/pause
  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false)
    } else {
      // If at the end or no active event, start from beginning
      if (activeEventIndex === null || activeEventIndex >= sortedEvents.length - 1) {
        setActiveEventIndex(0)
        setTimeout(() => scrollToEvent(0), 100)
      } else {
        // Otherwise continue from current position
        setIsPlaying(true)
      }
    }
  }

  // Scroll to top
  const scrollToTop = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
    setActiveEventIndex(null)
    setIsPlaying(false)
  }

  // Auto-play effect
  useEffect(() => {
    if (!isPlaying) return

    // Start from beginning if no active event
    if (activeEventIndex === null) {
      setActiveEventIndex(0)
      scrollToEvent(0)
      return
    }

    const timer = setTimeout(() => {
      if (activeEventIndex < sortedEvents.length - 1) {
        const nextIndex = activeEventIndex + 1
        setActiveEventIndex(nextIndex)
        scrollToEvent(nextIndex)
      } else {
        // Reached the end
        setIsPlaying(false)
      }
    }, 3000) // 3 seconds per event

    return () => clearTimeout(timer)
  }, [isPlaying, activeEventIndex, sortedEvents.length])

  // Set playing state when activeEventIndex changes
  useEffect(() => {
    if (activeEventIndex !== null && !isPlaying) {
      setIsPlaying(true)
    }
  }, [activeEventIndex])

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
        <h2 className="text-xl font-semibold text-green-900">{t("timeline.title")}</h2>
        <Button variant="outline" size="icon" onClick={togglePlay} className="rounded-full">
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
      </div>

      <div ref={timelineRef} className="flex-1 overflow-y-auto p-4 md:p-8">
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-green-200 transform md:-translate-x-px"></div>

          {/* Timeline events */}
          <div className="relative space-y-12 pb-20">
            {sortedEvents.map((event, index) => {
              const person = event.personId ? familyData.find((p) => p.id === event.personId) : null
              const isActive = activeEventIndex === index
              const isPast = activeEventIndex !== null && index < activeEventIndex

              return (
                <div
                  key={event.id}
                  data-event-id={event.id}
                  className={cn(
                    "relative flex flex-col md:flex-row items-start gap-4",
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                  )}
                >
                  {/* Year marker */}
                  <div
                    className={cn(
                      "absolute left-0 md:static flex items-center",
                      index % 2 === 0 ? "md:text-right md:justify-end" : "md:text-left md:justify-start",
                      "w-8 md:w-[calc(50%-20px)]",
                    )}
                  >
                    <div
                      className={cn(
                        "font-bold text-sm md:text-base",
                        isActive ? "text-green-800" : "text-gray-500",
                        isPast ? "text-gray-400" : "",
                      )}
                    >
                      {event.year}
                      {event.month && <span className="text-xs ml-1">({event.month})</span>}
                    </div>
                  </div>

                  {/* Event marker */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 mt-1">
                    <motion.div
                      className={cn(
                        "w-6 h-6 rounded-full border-4 border-white flex items-center justify-center shadow-sm",
                        getEventColor(event.type),
                        isActive ? "ring-2 ring-green-400 ring-offset-2" : "",
                      )}
                      animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 0.5, repeat: isActive ? Number.POSITIVE_INFINITY : 0, repeatDelay: 1 }}
                    >
                      {getEventIcon(event.type)}
                    </motion.div>
                  </div>

                  {/* Event content */}
                  <div
                    className={cn(
                      "ml-12 md:ml-0 w-full md:w-[calc(50%-20px)]",
                      "transition-all duration-300",
                      isActive ? "opacity-100" : "opacity-80",
                      isPast ? "opacity-60" : "",
                    )}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`event-${isActive ? "active" : "inactive"}-${event.id}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className={cn(
                          "bg-white rounded-lg p-4 shadow-md border",
                          isActive ? "border-green-300" : "border-gray-200",
                        )}
                      >
                        <h3 className="font-bold text-base md:text-lg text-green-900 mb-1">{event.title}</h3>

                        {person && (
                          <div className="text-sm text-gray-600 mb-2 flex items-center gap-1">
                            <User className="h-3 w-3" />
                            <span>{person.title}</span>
                          </div>
                        )}

                        <p className="text-sm md:text-base text-gray-700">{event.description}</p>

                        {isActive && (
                          <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
                            <Clock className="h-3 w-3" />
                            <span>
                              {event.year} {event.month ? `- Month ${event.month}` : ""}{" "}
                              {event.day ? `- Day ${event.day}` : ""}
                            </span>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              )
            })}

            {/* End of timeline */}
            <div className="relative flex justify-center pt-8">
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-6 rounded-full bg-green-100 border-4 border-white flex items-center justify-center shadow-sm"></div>
              </div>

              <div className="ml-12 md:ml-0 bg-white rounded-lg p-4 shadow-md border border-gray-200 text-center">
                <p className="text-gray-600 mb-4">End of timeline</p>
                <Button variant="outline" size="sm" onClick={scrollToTop} className="gap-2">
                  <ArrowUp className="h-3 w-3" />
                  Back to top
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main component with Suspense
export default function TimelineView() {
  return (
    <Suspense fallback={<TimelineViewFallback />}>
      <TimelineViewContent />
    </Suspense>
  )
}

