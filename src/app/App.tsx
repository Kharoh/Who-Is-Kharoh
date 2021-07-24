/* Import the modules */
import React from 'react'

/* Import pages components */
import HomePage from '../components/pages/HomePage'
import MobilePage from '../components/pages/MobilePage'

/* Import all other components displayed on the page that I call widgets */


const App = () => {

  /* Return the mobile page // this page will be designed later */
  if (window.innerWidth < 768) {
    return <MobilePage />
  }

  /* Return the home page */
  return <HomePage />
}

export default App
