import { createTheme, ThemeProvider } from "@mui/material"
import React, { useContext, useMemo, useState } from "react"
import { themeData } from "../../data/themeData"
// prettier-ignore
import {  retrieveStoredThemeData, savetoLocalStorage } from "./helper"

const ThemeContext = React.createContext()

export const ThemeContextProvider = ({ children }) => {
  // Get the type & color from localStorage
  const { initialThemeType, initialThemeColor } = retrieveStoredThemeData()
  const [themeType, setThemeType] = useState(initialThemeType) // light
  const [themeColor, setThemeColor] = useState(initialThemeColor) // blue

  const selectedThemeColor = themeData.filter(
    (theme) => theme.label === themeColor
  )[0]

  const themeMode =
    themeType === "dark"
      ? selectedThemeColor.darkTheme
      : selectedThemeColor.lightTheme

  // const [themeMode, setThemeMode] = useState(selectedThemeMode) // {type:'light', primary:'blue'}
  const colorMode = useMemo(
    () => ({
      toggleThemeType: () => {
        setThemeType((prevMode) => (prevMode === "light" ? "dark" : "light"))
      },
      changeThemeColor: (color) => {
        setThemeColor(color)
      },
      themeMode,
      themeColor,
      themeType,
    }),
    [themeMode, themeType, themeColor]
  )

  // Save theme in localStorage and set it as default
  const theme = useMemo(() => {
    savetoLocalStorage(themeType, themeColor)
    return createTheme(themeMode)
  }, [themeType, themeColor, themeMode])

  // const value = { themeMode }
  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)
