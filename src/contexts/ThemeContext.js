import { createTheme, ThemeProvider } from "@mui/material"
import React, { useContext, useMemo, useState } from "react"
import { themeData } from "../data/themeData"

export const ThemeContext = React.createContext()

const ThemeContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(themeData.theme)

  const theme = useMemo(() => createTheme(themeMode), [themeMode])

  const value = { themeMode }
  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider

export const useThemeContext = () => useContext(ThemeContext)
