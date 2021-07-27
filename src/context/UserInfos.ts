import React from 'react'

const defaultUserInfos = {
  name: 'Visiteur',
  isUserNamePicked: false,
} as const

export default React.createContext(defaultUserInfos)

export { defaultUserInfos }
