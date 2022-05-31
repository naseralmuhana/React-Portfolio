import IconButton from "@mui/material/IconButton"
import { styled } from "@mui/system"
import { FiCheck } from "react-icons/fi"
import { useThemeContext } from "../../contexts/theme"
import CustomTooltip from "../UI/CustomTooltip"

const ColorSwitcherButton = ({ col, label }) => {
  const { changeThemeColor, themeColor } = useThemeContext()

  return (
    <CustomTooltip title={label} placement="left">
      <IconButtonColor
        col={col}
        onClick={() => changeThemeColor(label)}
        className={`${label === "white&black" ? "whiteBlack" : ""}`}
      >
        {themeColor === label && <FiCheck />}
      </IconButtonColor>
    </CustomTooltip>
  )
}

export default ColorSwitcherButton

export const IconButtonColor = styled(IconButton)(({ theme, col }) => ({
  backgroundColor: col,
  color: theme.secondary,
  width: "40px",
  height: "40px",
  transition: "all 0.20s linear",
  "&:hover": {
    transform: "scale(1.1)",
    backgroundColor: col,
  },
  "&.whiteBlack": {
    color: "#212121",
    background: "linear-gradient(45deg, #EAEAEA 50%,#000000 50%)",
    border: "1px solid #000000",
  },
}))
