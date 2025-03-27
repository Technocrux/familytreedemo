"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import type { PersonData } from "@/lib/types"
import { motion } from "framer-motion"

interface PersonNodeProps {
  person: PersonData
  isSelected?: boolean
  onClick?: () => void
}

export default function PersonNode({ person, isSelected, onClick }: PersonNodeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "flex flex-col items-center gap-2 w-[70px] md:w-[90px] cursor-pointer transition-all duration-300",
        isSelected && "scale-110",
      )}
      onClick={onClick}
    >
      <div
        className={cn(
          "relative w-14 h-14 md:w-18 md:h-18 rounded-full overflow-hidden shadow-md transition-all duration-300",
          isSelected ? "ring-4 ring-green-600 ring-opacity-70" : "ring-2 ring-gray-200 hover:ring-green-400",
        )}
      >
        {person.image ? (
          <Image src={person.image || "/placeholder.svg"} alt={person.name} fill className="object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center text-green-800 font-semibold text-lg">
            {person.name.charAt(0)}
          </div>
        )}
      </div>
      <div className="text-center px-1 w-full">
        <div className="text-xs md:text-sm font-medium text-green-800 mb-0.5 line-clamp-1">{person.name}</div>
        {person.title && (
          <div className="text-[9px] md:text-[11px] text-gray-600 line-clamp-2 leading-tight">
            {person.title.split(" ").slice(0, 3).join(" ")}
          </div>
        )}
      </div>
    </motion.div>
  )
}

