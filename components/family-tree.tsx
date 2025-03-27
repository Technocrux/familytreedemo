"use client"

import { useState, useRef, useEffect, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { createFamilyData, relationships } from "@/lib/data"
import PersonNode from "@/components/person-node"
import { useLanguage } from "@/lib/language-context"
import LanguageSwitcher from "@/components/language-switcher"
import { useMediaQuery } from "@/hooks/use-mobile"

// Create a fallback component
function FamilyTreeFallback() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center p-4">
        <div className="h-6 w-48 bg-gray-200 rounded"></div>
        <div className="flex gap-2 items-center">
          <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
          <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
          <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
        </div>
      </div>
      <div className="relative flex-1 overflow-auto border-t bg-green-50 bg-opacity-30">
        <div className="flex items-center justify-center h-full">
          <div className="text-gray-400">Loading family tree...</div>
        </div>
      </div>
    </div>
  )
}

// Create a client component that uses useSearchParams
function FamilyTreeContent() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const searchParams = useSearchParams()
  const router = useRouter()
  const selectedId = searchParams.get("person")
  const { language, t } = useLanguage()
  const isMobile = useMediaQuery("(max-width: 768px)")

  const familyData = createFamilyData(language)

  // Handle zoom
  const handleZoom = (zoomIn: boolean) => {
    setScale((prev) => {
      const newScale = zoomIn ? prev * 1.2 : prev / 1.2
      return Math.min(Math.max(0.5, newScale), 2)
    })
  }

  // Select a person
  const selectPerson = (id: string) => {
    const params = new URLSearchParams(searchParams)
    params.set("person", id)
    router.push(`?${params.toString()}`)
  }

  // Set initial scale for mobile
  useEffect(() => {
    if (isMobile && scale === 1) {
      setScale(0.7)
    }
  }, [isMobile, scale])

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-lg md:text-xl font-semibold text-green-900">{t("app.title")}</h1>
        <div className="flex gap-2 items-center">
          <button
            onClick={() => handleZoom(false)}
            className="p-2 rounded-full bg-white shadow-sm hover:bg-gray-50 transition-colors border border-gray-200 text-green-800"
            aria-label={t("zoom.out")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
          <button
            onClick={() => handleZoom(true)}
            className="p-2 rounded-full bg-white shadow-sm hover:bg-gray-50 transition-colors border border-gray-200 text-green-800"
            aria-label={t("zoom.in")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
          <LanguageSwitcher />
        </div>
      </div>

      <div
        className="relative flex-1 overflow-auto border-t bg-green-50 bg-opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFhNTIyOSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"
        ref={containerRef}
      >
        <div
          className="min-w-[1000px] min-h-[800px] p-8 transform-gpu transition-transform duration-200"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "top center",
          }}
        >
          {/* Draw relationship lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {relationships.map((rel, idx) => {
              const source = familyData.find((p) => p.id === rel.source)
              const target = familyData.find((p) => p.id === rel.target)

              if (!source || !target) return null

              // Calculate positions based on their DOM positions
              const sourceX = source.position.x + 35
              const sourceY = source.position.y + 35
              const targetX = target.position.x + 35
              const targetY = target.position.y + 35

              // For parent-child relationships
              if (rel.type === "parent-child") {
                return (
                  <g key={idx}>
                    <path
                      d={`M ${sourceX} ${sourceY} L ${sourceX} ${(sourceY + targetY) / 2} L ${targetX} ${(sourceY + targetY) / 2} L ${targetX} ${targetY}`}
                      stroke="#1E5631"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                )
              }

              // For marriages/partnerships
              if (rel.type === "marriage") {
                return (
                  <line
                    key={idx}
                    x1={sourceX}
                    y1={sourceY}
                    x2={targetX}
                    y2={targetY}
                    stroke="#1E5631"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                )
              }

              // For former relationships
              if (rel.type === "former") {
                return (
                  <line
                    key={idx}
                    x1={sourceX}
                    y1={sourceY}
                    x2={targetX}
                    y2={targetY}
                    stroke="#1E5631"
                    strokeWidth="1.5"
                    strokeDasharray="5,5"
                    strokeLinecap="round"
                  />
                )
              }

              return null
            })}
          </svg>

          {/* Render person nodes */}
          {familyData.map((person) => (
            <div
              key={person.id}
              className="absolute"
              style={{
                left: `${person.position.x}px`,
                top: `${person.position.y}px`,
              }}
            >
              <PersonNode
                person={person}
                isSelected={person.id === selectedId}
                onClick={() => selectPerson(person.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Main component with Suspense
export default function FamilyTree() {
  return (
    <Suspense fallback={<FamilyTreeFallback />}>
      <FamilyTreeContent />
    </Suspense>
  )
}

