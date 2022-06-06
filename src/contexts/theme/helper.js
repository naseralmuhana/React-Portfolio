export const retrieveStoredThemeData = () => {
  const isSystemDarkTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches

  // retrieve the storedThemeType, if not found return light as default
  const initialThemeType = localStorage.getItem("themeType")
    ? JSON.parse(localStorage.getItem("themeType"))
    : isSystemDarkTheme
    ? "dark"
    : "light"

  // retrieve the storedThemeColor, if not found return orange as default
  const initialThemeColor = localStorage.getItem("themeColor")
    ? JSON.parse(localStorage.getItem("themeColor"))
    : "blue"

  return {
    initialThemeType,
    initialThemeColor,
  }
}

export const savetoLocalStorage = (themeType, themeColor) => {
  // store themeType & themeColor in LocalStorage
  localStorage.setItem("themeType", JSON.stringify(themeType))
  localStorage.setItem("themeColor", JSON.stringify(themeColor))
}
