import React, { useState, useEffect, useContext } from 'react'

import { Assets } from '../../../context'

const HomePage = (props: HomePageProps) => {
  const assets = useContext(Assets)

  return (
    <div id="HomePage">
      <header>
        <img className="logo-element" src={assets.images.logo} alt="Le logo de Kharoh." />
      </header>
      <main></main>
    </div>
  )
}

interface HomePageProps {
}

export default HomePage
