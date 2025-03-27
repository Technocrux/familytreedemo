"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translations for UI elements
const translations = {
  en: {
    "app.title": "The Family Tree of Hazrat Ali bin Abu Talib (R.A)",
    "nav.home": "Home",
    "nav.search": "Search",
    "nav.history": "History",
    "nav.timeline": "Timeline",
    "nav.family": "Family",
    about: "About",
    "zoom.in": "Zoom In",
    "zoom.out": "Zoom Out",
    language: "Language",
    "language.english": "English",
    "language.arabic": "Arabic",
    "timeline.title": "Timeline of Key Events",
    "timeline.scroll.left": "Scroll left",
    "timeline.scroll.right": "Scroll right",
    "timeline.events.in": "Events in",
    "timeline.play": "Play timeline",
    "timeline.pause": "Pause timeline",
    "timeline.back.to.top": "Back to top",
    "timeline.end": "End of timeline",
  },
  ar: {
    "app.title": "شجرة عائلة الإمام علي بن أبي طالب (رضي الله عنه)",
    "nav.home": "الرئيسية",
    "nav.search": "بحث",
    "nav.history": "التاريخ",
    "nav.timeline": "الجدول الزمني",
    "nav.family": "العائلة",
    about: "حول",
    "zoom.in": "تكبير",
    "zoom.out": "تصغير",
    language: "اللغة",
    "language.english": "الإنجليزية",
    "language.arabic": "العربية",
    "timeline.title": "الجدول الزمني للأحداث الرئيسية",
    "timeline.scroll.left": "التمرير لليسار",
    "timeline.scroll.right": "التمرير لليمين",
    "timeline.events.in": "أحداث عام",
    "timeline.play": "تشغيل الجدول الزمني",
    "timeline.pause": "إيقاف الجدول الزمني",
    "timeline.back.to.top": "العودة إلى الأعلى",
    "timeline.end": "نهاية الجدول الزمني",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  // Apply RTL direction when language is Arabic
  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

