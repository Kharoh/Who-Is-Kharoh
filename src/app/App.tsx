/* Import the modules */
import React from 'react'
import assets from '../assets/assets'

/* Import contexts */
import {
  Assets
} from '../context'

/* Import pages components */
import HomePage from '../components/pages/HomePage'
import MobilePage from '../components/pages/MobilePage'

/* Import all other components displayed on the page that I call widgets */


const App = () => {

  /* Return the mobile page // this page will be designed later */
  if (window.innerWidth < 768) {
    return <Assets.Provider value={assets}>
      <MobilePage />
    </Assets.Provider>
  }

  /* Return the home page */
  return <Assets.Provider value={assets}>
    <HomePage />
  </Assets.Provider>
}

export default App
