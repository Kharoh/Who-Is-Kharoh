/* Import the modules */
import React, { useState } from 'react'
import assets from '../assets/assets'

/* Import contexts */
import {
  Assets,
  UserInfos,
  Utils,
} from '../context'
import { UtilsInterface } from '../context/Utils'
import { defaultUserInfos } from '../context/UserInfos'

/* Import methods */
import generatePickUserName from './methods/generatePickUserName'

/* Import pages components */
import HomePage from '../components/pages/HomePage'
import MobilePage from '../components/pages/MobilePage'

/* Import all other components displayed on the page that I call widgets */


const App = () => {
  const [userInfos, setUserInfos] = useState(defaultUserInfos)

  /* Generate Utils methods */
  const utils: UtilsInterface = {
    pickUserName: generatePickUserName(setUserInfos)
  }

  /* Return the mobile page // this page will be designed later */
  if (window.innerWidth < 768) {
    return <Assets.Provider value={assets}>
      <MobilePage />
    </Assets.Provider>
  }

  /* Return the home page */
  return (
    <Assets.Provider value={assets}>
      <Utils.Provider value={utils}>
        <UserInfos.Provider value={userInfos}>
          <HomePage />
        </UserInfos.Provider>
      </Utils.Provider>
    </Assets.Provider>
  )
}

export default App
