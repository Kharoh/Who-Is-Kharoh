import React from 'react'

export default React.createContext({} as Partial<UtilsInterface>)

export interface UtilsInterface {
  pickUserName: () => void
}