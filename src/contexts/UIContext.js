import React, { useContext, useState } from "react"

const UIContext = React.createContext()

const UIContextProvider = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const setHandleDrawer = () => setDrawerOpen((state) => !state)

  const value = { drawerOpen, setHandleDrawer }

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}

export default UIContextProvider

export const useUIContext = () => useContext(UIContext)
