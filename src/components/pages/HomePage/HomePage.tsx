import React, { useState, useEffect, useContext } from 'react'

import { Assets, UserInfos } from '../../../context'

import VillageGrid from '../../widgets/VillageGrid'

const HomePage = (props: HomePageProps) => {
  const assets = useContext(Assets)
  const userInfos = useContext(UserInfos)

  return (
    <div id="HomePage">
      <header>
        <VillageGrid />
      </header>
      <nav>
        <h2>Bienvenue, <span className="alternate">{userInfos.name}</span></h2>
      </nav>
      <main></main>
    </div>
  )
}

interface HomePageProps {
}

export default HomePage
