import DarkMode from "@mui/icons-material/DarkMode"
import LightModeOutlined from "@mui/icons-material/LightModeOutlined"
import IconButton from "@mui/material/IconButton"
import { styled } from "@mui/system"
import { useThemeContext } from "../../contexts/theme"
import CustomTooltip from "../CustomTooltip"
import { useEffect } from "react"

const TypeSwitcherButton = ({ isOpen }) => {
  const { toggleThemeType, themeType, themeMode } = useThemeContext()

  useEffect(() => {
    const selector = document.documentElement.style
    selector.setProperty("--scrollbarBackground", themeMode.secondary70)
    selector.setProperty("--scrollbarThumbBackground", themeMode.primary)
    selector.setProperty(
      "--scrollbarThumbBackgroundHover",
      themeMode.primary400
    )
    selector.setProperty(
      "--scrollbarThumbBackgroundActive",
      themeMode.primary600
    )
  }, [themeMode])

  return (
    <div style={{ position: "absolute" }}>
      <CustomTooltip title={themeType} placement={"left"}>
        <ThemeTypeButton
          onClick={toggleThemeType}
          className={isOpen ? "open" : undefined}
        >
          {themeType === "dark" ? (
            <LightModeOutlined className="icon" />
          ) : (
            <DarkMode className="icon" />
          )}
        </ThemeTypeButton>
      </CustomTooltip>
    </div>
  )
}

export default TypeSwitcherButton

const ThemeTypeButton = styled(IconButton)(({ theme }) => ({
  zIndex: 1500,
  backgroundColor: theme.tertiary,
  color: theme.secondary,
  transition: `transform 0.5s calc(0.05s * ${1}),
  backgroundColor 0.2s linear,
  color 0.2s linear`,
  "&.open": {
    boxShadow: "-4px 7px 12px -5px rgba(0,0,0,0.3)",
    transform: `translateY(calc(45 * ${1}px))`,
  },

  "&:hover": {
    backgroundColor: theme.tertiary,
    color: theme.secondary,
  },
}))
