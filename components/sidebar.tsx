"use client"

import type React from "react"
import { Home, Search, BookOpen, Clock, Users, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { createFamilyData } from "@/lib/data"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { useState, Suspense } from "react"
import { useMediaQuery } from "@/hooks/use-mobile"

// Create a client component that uses useSearchParams
function SidebarContent() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const selectedId = searchParams.get("person")
  const { language, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const familyData = createFamilyData(language)
  const selectedPerson = selectedId
    ? familyData.find((person) => person.id === selectedId)
    : familyData.find((person) => person.id === "ali")

  return (
    <>
      {isMobile && (
        <div className="fixed top-4 left-4 z-50">
          <Button variant="outline" size="icon" className="bg-white shadow-md" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      )}

      <div
        className={cn(
          "flex flex-col bg-[#1E5631] text-white",
          isMobile
            ? "fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-200 ease-in-out"
            : "md:w-[280px]",
          isMobile && !isOpen ? "-translate-x-full" : "translate-x-0",
        )}
      >
        <div className="flex flex-row md:flex-col">
          <NavButton
            icon={<Home />}
            label={t("nav.home")}
            href="/"
            isActive={pathname === "/"}
            onClick={() => isMobile && setIsOpen(false)}
          />
          <NavButton
            icon={<Search />}
            label={t("nav.search")}
            href="/search"
            isActive={pathname === "/search"}
            onClick={() => isMobile && setIsOpen(false)}
          />
          <NavButton
            icon={<BookOpen />}
            label={t("nav.history")}
            href="/history"
            isActive={pathname === "/history"}
            onClick={() => isMobile && setIsOpen(false)}
          />
          <NavButton
            icon={<Clock />}
            label={t("nav.timeline")}
            href="/timeline"
            isActive={pathname === "/timeline"}
            onClick={() => isMobile && setIsOpen(false)}
          />
          <NavButton
            icon={<Users />}
            label={t("nav.family")}
            href="/family"
            isActive={pathname === "/family"}
            onClick={() => isMobile && setIsOpen(false)}
          />
        </div>

        {selectedPerson && pathname !== "/timeline" && (
          <div className="p-4 flex-1 overflow-auto">
            <h2 className="text-xl font-bold mb-1">{selectedPerson.title}</h2>
            {selectedPerson.birthDate && (
              <p className="text-sm mb-4">
                {selectedPerson.birthDate}
                {selectedPerson.deathDate && ` - ${selectedPerson.deathDate}`}
              </p>
            )}

            <div className="space-y-4 text-sm">
              {selectedPerson.bio && selectedPerson.bio.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
          </div>
        )}

        <div className="p-4 text-xs">
          <Button variant="link" className="text-white p-0 h-auto">
            {t("about")}
          </Button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={() => setIsOpen(false)} />
      )}
    </>
  )
}

// Create a fallback component
function SidebarFallback() {
  return (
    <div className="flex flex-col md:w-[280px] bg-[#1E5631] text-white">
      <div className="flex flex-row md:flex-col">
        <div className="flex flex-col items-center justify-center p-4">
          <div className="w-6 h-6 rounded-full bg-white/20"></div>
          <div className="w-12 h-2 mt-1 bg-white/20 rounded"></div>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <div className="w-6 h-6 rounded-full bg-white/20"></div>
          <div className="w-12 h-2 mt-1 bg-white/20 rounded"></div>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <div className="w-6 h-6 rounded-full bg-white/20"></div>
          <div className="w-12 h-2 mt-1 bg-white/20 rounded"></div>
        </div>
      </div>
    </div>
  )
}

// Main sidebar component with Suspense
export default function Sidebar() {
  return (
    <Suspense fallback={<SidebarFallback />}>
      <SidebarContent />
    </Suspense>
  )
}

function NavButton({
  icon,
  label,
  href,
  isActive,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  href: string
  isActive?: boolean
  onClick?: () => void
}) {
  return (
    <Link href={href} className="block" onClick={onClick}>
      <div
        className={cn(
          "flex flex-col items-center justify-center p-4 hover:bg-green-800 transition-colors",
          isActive && "bg-green-800",
        )}
      >
        {icon}
        <span className="text-xs mt-1">{label}</span>
      </div>
    </Link>
  )
}

