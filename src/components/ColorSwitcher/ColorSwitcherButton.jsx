import IconButton from "@mui/material/IconButton"
import { styled } from "@mui/system"
import { FiCheck } from "react-icons/fi"
import { useThemeContext } from "../../contexts/theme"
import CustomTooltip from "../CustomTooltip"

const ColorSwitcherButton = ({ item, isOpen }) => {
  const { id, col, label } = item
  const { changeThemeColor, themeColor } = useThemeContext()

  const className = `${label === "white&black" ? "whiteBlack" : ""} ${
    isOpen ? "open" : undefined
  }`

  return (
    <div style={{ position: "absolute" }}>
      <CustomTooltip title={label} placement="left">
        <IconButtonColor
          col={col}
          index={id + 1}
          onClick={() => changeThemeColor(label)}
          className={className}
        >
          {themeColor === label && <FiCheck />}
        </IconButtonColor>
      </CustomTooltip>
    </div>
  )
}

export default ColorSwitcherButton

export const IconButtonColor = styled(IconButton)(({ theme, col, index }) => ({
  backgroundColor: col,
  color: theme.secondary,
  zIndex: 1500,

  width: "40px",
  height: "40px",

  transition: `transform 0.5s calc(0.05s * ${index}),
  backgroundColor 0.2s linear,
  color 0.2s linear,border 0.2s linear`,
  "&:hover": {
    transform: "scale(1.1)",
    backgroundColor: col,
  },
  "&.open": {
    transform: `translateY(calc(45 * ${index}px))`,
  },
  "&.whiteBlack": {
    color: "#212121",
    background: "linear-gradient(45deg, #EAEAEA 50%,#000000 50%)",
    border: "1px solid #000000",
  },
}))
