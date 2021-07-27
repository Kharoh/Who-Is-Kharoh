import React, { useState, useEffect } from 'react'

import { BuildingColor, BuildingName, Coordinates } from '../../../global'

import Chunk from '../Chunk'

const VillageGrid = (props: VillageGridProps) => {

  /* Whether two sets of coordinates match or not */
  const matchCoordinates = (a: Coordinates, b: Coordinates) => {
    return a.x === b.x && a.y === b.y
  }

  /* Pick a random developing bone */
  const pickRandomDevelopingBone = (skeleton: VillageSkeleton): VillageBone => {
    const developingBones = skeleton
      .filter(bone => bone.developingDirection)
    return developingBones[Math.floor(Math.random() * developingBones.length)]
  }

  /* Get a random building name */
  const getRandomBuildingName = (): BuildingName => {
    const random = Math.random()
    if (random < 0.5) return 'house'
    if (0.5 <= random && random < 0.6) return 'market'
    if (0.6 <= random && random < 0.8) return 'hall'
    if (0.8 <= random && random < 1) return 'outpost'
  }

  /* Get new coordinates from coordinates set and direction */
  const getNewCoordinates = (coordinates: Coordinates, direction: string): Coordinates => {
    if (direction === 'up') return { x: coordinates.x, y: coordinates.y - 1 }
    if (direction === 'down') return { x: coordinates.x, y: coordinates.y + 1 }
    if (direction === 'left') return { x: coordinates.x - 1, y: coordinates.y }
    if (direction === 'right') return { x: coordinates.x + 1, y: coordinates.y }
  }

  /* Get developed bones from a developing bone */
  const getDevelopedBones = (developingBone: VillageBone, skeletonLength: number): VillageBone[] => {
    const developedBones: VillageBone[] = []
    for (const direction of ['up', 'down', 'left', 'right'] as const) {
      const probabilityOfDeveloping =
        direction === developingBone.developingDirection ? 0.9 : 0.15
      if (Math.random() < probabilityOfDeveloping) {
        if (Math.random() < 0.675) {
          developedBones.push({
            building: 'way',
            coordinates: getNewCoordinates(developingBone.coordinates, direction),
            developingDirection: direction,
            index: ++skeletonLength
          })
        }
        else {
          developedBones.push({
            building: getRandomBuildingName(),
            coordinates: getNewCoordinates(developingBone.coordinates, direction),
            index: ++skeletonLength
          })
        }
      }
    }
    return developedBones
  }

  /* Develop a random bone in the skeleton */
  const developRandomBone = (skeleton: VillageSkeleton) => {
    skeleton = skeleton.slice()
    const developingBone = pickRandomDevelopingBone(skeleton)

    const possibleDevelopedBones = getDevelopedBones(developingBone, skeleton.length)
    for (const developedBone of possibleDevelopedBones) {
      if (skeleton.find(bone => matchCoordinates(bone.coordinates, developedBone.coordinates))) continue
      skeleton.push(developedBone)
    }

    return skeleton
  }

  /* Convert the coordinates of the skeleton to the coordinates of the grid. */
  const convertCoordinatesToGridCoordinates = (coordinates: Coordinates): Coordinates => {
    return { y: coordinates.y + 50, x: coordinates.x + 50 }
  }

  /* Pick a random building color */
  const pickRandomBuildingColor = (): BuildingColor => {
    const colors = ["brown", "pink", "blue", "yellow", "green"] as const
    return colors[Math.floor(Math.random() * colors.length)]
  }

  /* Create an array containing the skeleton of the village, will be used to store developing bones */
  let villageSkeleton: VillageSkeleton = [
    /* The townhall bone */
    {
      building: 'townhall',
      coordinates: { x: 0, y: 0 },
      index: 0,
    },
    /* The first way bone */
    {
      building: 'way',
      coordinates: { x: 0, y: 1 },
      index: 1,
    },
    /* The ways around the first way */
    {
      building: 'way',
      coordinates: { x: -1, y: 1 },
      developingDirection: 'left',
      index: 2,
    },
    {
      building: 'way',
      coordinates: { x: 1, y: 1 },
      developingDirection: 'right',
      index: 4,
    },
    {
      building: 'way',
      coordinates: { x: 0, y: 2 },
      developingDirection: 'down',
      index: 3,
    },
  ]

  for (let i = 0; i < 1000; i++) {
    villageSkeleton = developRandomBone(villageSkeleton)
  }

  /* The layout of the village */
  const villageLayout = villageSkeleton.map((bone) => {
    const coordinates = convertCoordinatesToGridCoordinates(bone.coordinates)

    const buildingAnimation: React.CSSProperties = {}
    if (bone.building === 'townhall') buildingAnimation.animation = 'none'
    else if (bone.building === 'way') buildingAnimation.animationDelay = (0.05 * Math.abs(bone.index)) + 's'
    else buildingAnimation.animationDelay = (0.5 + 0.05 * Math.abs(bone.index)) + 's'

    return (
      <Chunk
        key={coordinates.x + '|' + coordinates.y}
        style={{
          gridRow: coordinates.y,
          gridColumn: coordinates.x,
          zIndex: coordinates.y - coordinates.x,
        }}
        buildingStyle={{ ...buildingAnimation }}
        infoStyle={{
          animationDelay: (1 + 0.05 * Math.abs(bone.index)) + 's'
        }}
        buildingColor={pickRandomBuildingColor()}
        buildingName={bone.building}
        chunkColor="plains"
      />
    )
  })

  return (
    <div id="VillageGrid">
      {villageLayout}
    </div>
  )
}

interface VillageGridProps {
}

type VillageSkeleton = VillageBone[]

interface VillageBone {
  /** 
   * Name of the building.
   */
  building: BuildingName
  /**
   * The coordinates of the building on the grid.
   * Coordinates can be negative.
   * x: 0, y: 0 is the center of the grid. It corresponds to the townhall.
   */
  coordinates: Coordinates
  /**
   * The order of construction of the bone
   */
  index: number
  /**
   * The direction in which the bone is developing if it is a way.
   * If a way has no developing direction remaning, it has already been developed.
   */
  developingDirection?: VillageBoneDevelopingDirection
}

type VillageBoneDevelopingDirection = 'up' | 'down' | 'left' | 'right'

export default VillageGrid
