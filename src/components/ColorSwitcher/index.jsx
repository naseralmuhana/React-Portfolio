import IconButton from "@mui/material/IconButton"

import { styled } from "@mui/system"
import { useState } from "react"
import { FiSettings } from "react-icons/fi"
import { themeDataUi } from "../../data/themeData"
import CircularPlanet from "../UI/CircularPlanet"

import TypeSwitcherButton from "./TypeSwitcherButton"
import ColorSwitcherButton from "./ColorSwitcherButton"

const ColorSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleCloseMenu = () => setIsOpen(false)
  const handleClickMenu = () => setIsOpen(!isOpen)

  return (
    <Container>
      <CircularPlanet
        onClick={handleClickMenu}
        onClose={handleCloseMenu}
        open={isOpen}
        icon={FiSettings}
        title="Color Switcher"
        toolTipPlacement="bottom"
        orbitRadius={120}
        rotation={332}
      >
        {/* FirstHalf */}
        {themeDataUi.slice(0, 4).map(({ col, label }, i) => (
          <ColorSwitcherButton key={i} col={col} label={label} />
        ))}

        {/* Dark / light */}
        <TypeSwitcherButton />

        {/* SecondHalf */}
        {themeDataUi.slice(4, 8).map(({ col, label }, i) => (
          <ColorSwitcherButton key={i + 4} col={col} label={label} />
        ))}

        {[...Array(9).keys()].map((index) => (
          <div key={index} />
        ))}
      </CircularPlanet>
    </Container>
  )
}

export default ColorSwitcher

export const Container = styled("div")(({ theme }) => ({
  position: "fixed",
  top: "100px",
  right: "80px",
  zIndex: "1000",
  transition: "transform 0.25s linear",
  transform: "translateX(0)",
  [theme.breakpoints.down(800)]: {
    right: "77px",
  },
  "& .iconButton": {
    backgroundColor: theme.tertiary,
    color: theme.secondary,
    transition: "all 0.20s linear",
    "&:hover": {
      backgroundColor: theme.primary,
      color: theme.tertiary,
    },
  },
  "@keyframes rotate": {
    "100%": {
      transform: "rotate(360deg)",
    },
  },
  "& .main-btn": {
    animation: "rotate 2s linear infinite",
  },
  "& .open": {
    animation: "rotate 1s linear infinite",
    backgroundColor: theme.primary,
    color: theme.tertiary,
  },
}))

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
    color: theme.tertiary,
    background: "linear-gradient(45deg, #EAEAEA 50%,#000000 50%)",
    border: "1px solid #000000",
  },
}))
