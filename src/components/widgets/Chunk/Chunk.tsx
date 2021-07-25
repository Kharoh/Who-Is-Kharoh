import React, { useState, useEffect } from 'react'

import { BuildingColor, BuildingName } from '../../../global'

const Chunk = (props: ChunkProps) => {
  return (
    <div className="Chunk"></div>
  )
}

interface ChunkProps {
  buildingName: BuildingName
  buildingColor: BuildingColor
}

export default Chunk
