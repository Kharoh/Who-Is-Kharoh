export type BuildingName =
  | "townhall"
  | "house"
  | "way"
  | "market"
  | "hall"
  | "outpost"

export type BuildingColor =
  | "brown"
  | "pink"
  | "blue"
  | "yellow"
  | "green"

export type ChunkColor =
  | "plains"
  | "forest"
  | "desert"
  | "mountains"

export interface Coordinates {
  x: number
  y: number
}