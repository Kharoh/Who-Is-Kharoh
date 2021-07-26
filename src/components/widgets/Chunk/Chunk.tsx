import React, { useState, useEffect } from 'react'

import { BuildingColor, BuildingName, ChunkColor } from '../../../global'

import Building from '../Building'

const Chunk = (props: ChunkProps) => {

  /* Create the building element displayed on the chunk */
  let building: React.ReactNode = ''
  if (props.buildingName)
    building = <Building
      name={props.buildingName}
      color={props.buildingColor || "brown"}
      style={props.buildingStyle}
    />

  return (
    <div
      className="Chunk"
      style={{ backgroundColor: `var(--${props.chunkColor}-color`, ...(props.style ? props.style : {}) }}
    >
      {building}
    </div >
  )
}

interface ChunkProps {
  /**
   * The name of the building to build on the chunk.
   */
  buildingName?: BuildingName
  /**
   * The color of the building to build on the chunk. 
   * Sometimes, even specifying a color will let the building brown.
   */
  buildingColor?: BuildingColor

  /**
   * The color or the biome of the chunk.
   */
  chunkColor: ChunkColor

  /**
   * Custom style properties.
   */
  style?: React.CSSProperties
  /**
   * Custom style properties applied to the building image.
   */
  buildingStyle?: React.CSSProperties
}

export default Chunk
