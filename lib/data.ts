import type { PersonData, Relationship } from "./types"
import { personTranslations } from "./translations"

// Base family data structure (without translations)
export const createFamilyData = (language: "en" | "ar"): PersonData[] => {
  const translations = personTranslations[language]

  return [
    // Ancestors
    {
      id: "abd-al-muttalib",
      name: translations["abd-al-muttalib"].name,
      title: translations["abd-al-muttalib"].title,
      birthDate: "c. 497",
      deathDate: "c. 578",
      bio: translations["abd-al-muttalib"].bio,
      position: { x: 600, y: 50 },
    },
    {
      id: "abu-talib",
      name: translations["abu-talib"].name,
      title: translations["abu-talib"].title,
      birthDate: "c. 535",
      deathDate: "c. 619",
      bio: translations["abu-talib"].bio,
      position: { x: 450, y: 150 },
    },
    {
      id: "fatima-bint-asad",
      name: translations["fatima-bint-asad"].name,
      title: translations["fatima-bint-asad"].title,
      birthDate: "Unknown",
      deathDate: "c. 626",
      bio: translations["fatima-bint-asad"].bio,
      position: { x: 650, y: 150 },
    },
    {
      id: "abdullah",
      name: translations["abdullah"].name,
      title: translations["abdullah"].title,
      birthDate: "c. 545",
      deathDate: "c. 570",
      bio: translations["abdullah"].bio,
      position: { x: 850, y: 150 },
    },
    {
      id: "amina",
      name: translations["amina"].name,
      title: translations["amina"].title,
      birthDate: "c. 549",
      deathDate: "c. 577",
      bio: translations["amina"].bio,
      position: { x: 1050, y: 150 },
    },

    // Prophet Muhammad and Khadija
    {
      id: "muhammad",
      name: translations["muhammad"].name,
      title: translations["muhammad"].title,
      birthDate: "c. 570",
      deathDate: "c. 632",
      bio: translations["muhammad"].bio,
      position: { x: 950, y: 250 },
    },
    {
      id: "khadija",
      name: translations["khadija"].name,
      title: translations["khadija"].title,
      birthDate: "c. 555",
      deathDate: "c. 619",
      bio: translations["khadija"].bio,
      position: { x: 1150, y: 250 },
    },

    // Hazrat Ali and his wives
    {
      id: "ali",
      name: translations["ali"].name,
      title: translations["ali"].title,
      birthDate: "c. 601",
      deathDate: "c. 661",
      bio: translations["ali"].bio,
      position: { x: 550, y: 350 },
    },
    {
      id: "fatima",
      name: translations["fatima"].name,
      title: translations["fatima"].title,
      birthDate: "c. 615",
      deathDate: "c. 632",
      bio: translations["fatima"].bio,
      position: { x: 750, y: 350 },
    },
    {
      id: "umm-al-banin",
      name: translations["umm-al-banin"].name,
      title: translations["umm-al-banin"].title,
      birthDate: "Unknown",
      deathDate: "Unknown",
      bio: translations["umm-al-banin"].bio,
      position: { x: 350, y: 350 },
    },

    // Children of Hazrat Ali and Fatima
    {
      id: "hasan",
      name: translations["hasan"].name,
      title: translations["hasan"].title,
      birthDate: "c. 624",
      deathDate: "c. 670",
      bio: translations["hasan"].bio,
      position: { x: 650, y: 450 },
    },
    {
      id: "husain",
      name: translations["husain"].name,
      title: translations["husain"].title,
      birthDate: "c. 626",
      deathDate: "c. 680",
      bio: translations["husain"].bio,
      position: { x: 850, y: 450 },
    },
    {
      id: "zainab",
      name: translations["zainab"].name,
      title: translations["zainab"].title,
      birthDate: "c. 627",
      deathDate: "c. 682",
      bio: translations["zainab"].bio,
      position: { x: 1050, y: 450 },
    },
    {
      id: "umm-kulthum",
      name: translations["umm-kulthum"].name,
      title: translations["umm-kulthum"].title,
      birthDate: "c. 629",
      deathDate: "Unknown",
      bio: translations["umm-kulthum"].bio,
      position: { x: 1250, y: 450 },
    },

    // Children of Hazrat Ali from other wives
    {
      id: "abbas",
      name: translations["abbas"].name,
      title: translations["abbas"].title,
      birthDate: "c. 647",
      deathDate: "c. 680",
      bio: translations["abbas"].bio,
      position: { x: 450, y: 450 },
    },
    {
      id: "muhammad-hanafiyyah",
      name: translations["muhammad-hanafiyyah"].name,
      title: translations["muhammad-hanafiyyah"].title,
      birthDate: "c. 633",
      deathDate: "c. 700",
      bio: translations["muhammad-hanafiyyah"].bio,
      position: { x: 250, y: 450 },
    },

    // Some grandchildren (for illustration)
    {
      id: "ali-zain",
      name: translations["ali-zain"].name,
      title: translations["ali-zain"].title,
      birthDate: "c. 659",
      deathDate: "c. 713",
      bio: translations["ali-zain"].bio,
      position: { x: 850, y: 550 },
    },
    {
      id: "muhammad-baqir",
      name: translations["muhammad-baqir"].name,
      title: translations["muhammad-baqir"].title,
      birthDate: "c. 677",
      deathDate: "c. 733",
      bio: translations["muhammad-baqir"].bio,
      position: { x: 850, y: 650 },
    },
  ]
}

// Relationships between family members (these don't need translation)
export const relationships: Relationship[] = [
  // Marriages
  { source: "abd-al-muttalib", target: "abu-talib", type: "parent-child" },
  { source: "abd-al-muttalib", target: "abdullah", type: "parent-child" },

  { source: "abu-talib", target: "fatima-bint-asad", type: "marriage" },
  { source: "abdullah", target: "amina", type: "marriage" },

  { source: "abu-talib", target: "ali", type: "parent-child" },
  { source: "fatima-bint-asad", target: "ali", type: "parent-child" },

  { source: "abdullah", target: "muhammad", type: "parent-child" },
  { source: "amina", target: "muhammad", type: "parent-child" },

  { source: "muhammad", target: "khadija", type: "marriage" },
  { source: "muhammad", target: "fatima", type: "parent-child" },
  { source: "khadija", target: "fatima", type: "parent-child" },

  { source: "ali", target: "fatima", type: "marriage" },
  { source: "ali", target: "umm-al-banin", type: "marriage" },

  // Children of Ali and Fatima
  { source: "ali", target: "hasan", type: "parent-child" },
  { source: "fatima", target: "hasan", type: "parent-child" },

  { source: "ali", target: "husain", type: "parent-child" },
  { source: "fatima", target: "husain", type: "parent-child" },

  { source: "ali", target: "zainab", type: "parent-child" },
  { source: "fatima", target: "zainab", type: "parent-child" },

  { source: "ali", target: "umm-kulthum", type: "parent-child" },
  { source: "fatima", target: "umm-kulthum", type: "parent-child" },

  // Children of Ali from other wives
  { source: "ali", target: "abbas", type: "parent-child" },
  { source: "umm-al-banin", target: "abbas", type: "parent-child" },

  { source: "ali", target: "muhammad-hanafiyyah", type: "parent-child" },

  // Grandchildren
  { source: "husain", target: "ali-zain", type: "parent-child" },
  { source: "ali-zain", target: "muhammad-baqir", type: "parent-child" },
]

// Export a function to get family data based on language
export const familyData = createFamilyData("en")

