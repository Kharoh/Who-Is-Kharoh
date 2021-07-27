import React, { useState, useEffect, useContext } from 'react'

import { Assets } from '../../../context'

import VillageGrid from '../../widgets/VillageGrid'

const HomePage = (props: HomePageProps) => {
  const assets = useContext(Assets)

  return (
    <div id="HomePage">
      <header>
        <VillageGrid />
      </header>
      <nav></nav>
      <main></main>
    </div>
  )
}

interface HomePageProps {
}

export default HomePage
