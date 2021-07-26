import React, { useState, useEffect, useContext } from 'react'

import { BuildingColor, BuildingName } from '../../../global'

import { Assets } from '../../../context'

const Building = (props: BuildingProps) => {
  const assets = useContext(Assets)

  return <img
    className="Building"
    src={assets.images[props.color][props.name]}
    alt={props.name} />
}

interface BuildingProps {
  name: BuildingName
  color: BuildingColor
}

export default Building
