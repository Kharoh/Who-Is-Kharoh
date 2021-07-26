import React, { useState, useEffect, useContext } from 'react'

import { BuildingColor, BuildingName } from '../../../global'

import { Assets } from '../../../context'

const Building = (props: BuildingProps) => {
  const assets = useContext(Assets)

  return <img
    className="Building"
    src={assets.images[props.color][props.name]}
    alt={props.name}
    style={props.style} />
}

interface BuildingProps {
  name: BuildingName
  color: BuildingColor
  style: React.CSSProperties
}

export default Building
