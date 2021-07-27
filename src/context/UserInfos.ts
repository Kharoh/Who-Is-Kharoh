import React from 'react'

const defaultUserInfos = {
  name: 'Visiteur'
} as const

export default React.createContext(defaultUserInfos)

export { defaultUserInfos }
