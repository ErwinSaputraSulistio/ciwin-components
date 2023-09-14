import React, { useState } from 'react'

export const GlobalContext = React.createContext()

export const GlobalContextProvider = ({ children }) => {
  const [globalData, setGlobalData] = useState(null)

  return(
    <GlobalContext.Provider
      value={{
        globalData,
        setGlobalData
      }}
    >
      { children }
    </GlobalContext.Provider>
  )
}