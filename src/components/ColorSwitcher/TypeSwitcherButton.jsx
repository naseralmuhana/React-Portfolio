import DarkMode from "@mui/icons-material/DarkMode"
import LightModeOutlined from "@mui/icons-material/LightModeOutlined"
import IconButton from "@mui/material/IconButton"
import { useThemeContext } from "../../contexts/theme"
import CustomTooltip from "../UI/CustomTooltip"

const TypeSwitcherButton = () => {
  const { toggleThemeType, themeType } = useThemeContext()
  return (
    <CustomTooltip title={themeType} placement={"left"}>
      <IconButton className="iconButton" onClick={toggleThemeType}>
        {themeType === "dark" ? (
          <LightModeOutlined className="icon" />
        ) : (
          <DarkMode className="icon" />
        )}
      </IconButton>
    </CustomTooltip>
  )
}

export default TypeSwitcherButton
