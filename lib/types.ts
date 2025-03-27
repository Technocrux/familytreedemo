export interface PersonData {
  id: string
  name: string
  title?: string
  image?: string
  birthDate?: string
  deathDate?: string
  bio?: string[]
  position: {
    x: number
    y: number
  }
}

export interface Relationship {
  source: string
  target: string
  type: "marriage" | "former" | "parent-child"
}

