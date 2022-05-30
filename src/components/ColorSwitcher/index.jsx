import IconButton from "@mui/material/IconButton"
import { styled } from "@mui/system"
import { useState } from "react"
import { FiSettings } from "react-icons/fi"
import CircularPlanet from "../UI/CircularPlanet"
import CustomTooltip from "../UI/CustomTooltip"

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
        {[...Array(8).keys()].map((index) => (
          <CustomTooltip key={index} title="red" placement="left">
            <IconButton className="iconButton" onClick={handleCloseMenu}>
              {/* <SettingsIcon className="icon" /> */}
              <span />
            </IconButton>
          </CustomTooltip>
        ))}

        {[...Array(8).keys()].map((index) => (
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
    "& span": {
      width: "1.5rem",
      height: "1.5rem",
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
