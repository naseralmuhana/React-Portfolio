export const retrieveStoredThemeData = () => {
  // retrieve the storedThemeType, if not found return light as default
  const storedThemeType = localStorage.getItem("themeType")
    ? JSON.parse(localStorage.getItem("themeType"))
    : "light"

  // retrieve the storedThemeColor, if not found return orange as default
  const storedThemeColor = localStorage.getItem("themeColor")
    ? JSON.parse(localStorage.getItem("themeColor"))
    : "blue"

  return {
    initialThemeType: storedThemeType,
    initialThemeColor: storedThemeColor,
  }
}

export const savetoLocalStorage = (themeType, themeColor) => {
  // store themeType & themeColor in LocalStorage
  localStorage.setItem("themeType", JSON.stringify(themeType))
  localStorage.setItem("themeColor", JSON.stringify(themeColor))
}
