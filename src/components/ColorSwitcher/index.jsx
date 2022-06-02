import IconButton from "@mui/material/IconButton"
import { styled } from "@mui/system"
import { useState } from "react"
import { FiSettings } from "react-icons/fi"
import CustomTooltip from "../CustomTooltip"
import CustomMenu from "../CustomMenu"
import { themeDataUi } from "../../data/themeData"
import ColorSwitcherButton from "./ColorSwitcherButton"
import TypeSwitcherButton from "./TypeSwitcherButton"

const ColorSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleCloseMenu = () => setIsOpen(false)
  const handleClickMenu = () => setIsOpen(!isOpen)

  return (
    <Container>
      <CustomTooltip title="Theme" placement="top">
        <div>
          <SettingsIcon
            className={isOpen ? "open" : undefined}
            onClick={handleClickMenu}
          >
            <FiSettings />
          </SettingsIcon>
        </div>
      </CustomTooltip>

      <CustomMenu onClose={handleCloseMenu} show={isOpen}>
        <TypeSwitcherButton isOpen={isOpen} />
        {themeDataUi.map((item) => (
          <ColorSwitcherButton key={item.id} item={item} isOpen={isOpen} />
        ))}
      </CustomMenu>
    </Container>
  )
}

export default ColorSwitcher

export const Container = styled("div")(({ theme }) => ({
  zIndex: 2000,
  position: "fixed",
  top: "40px",
  right: "90px",
  [theme.breakpoints.down(800)]: {
    right: "60px",
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const SettingsIcon = styled(IconButton)(({ theme }) => ({
  zIndex: 1800,
  position: "relative",
  width: "2.6rem",
  height: "2.6rem",
  backgroundColor: theme.tertiary,
  color: theme.secondary,
  transition: "transform 0.5s",
  // animation: "rotate 2s linear infinite",
  "&:hover": {
    backgroundColor: theme.primary,
    color: theme.tertiary,
  },
  // "@keyframes rotate": {
  //   "100%": {
  //     transform: "rotate(360deg)",
  //   },
  // },
  "&.open": {
    // animation: "rotate 1s linear",
    transform: "rotate(360deg)",
    // backgroundColor: theme.primary,
    // color: theme.tertiary,
  },
}))
