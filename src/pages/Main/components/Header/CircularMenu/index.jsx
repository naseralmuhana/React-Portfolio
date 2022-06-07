import IconButton from "@mui/material/IconButton"
import { styled } from "@mui/system"
import { useState } from "react"
import { CustomMenu, CustomTooltip } from "../../../../../components"
import { circularMenuData } from "../../../../../data"
import MenuItem from "./MenuItem"

const CircularMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleCloseMenu = () => setIsOpen(false)
  const handleClickMenu = () => setIsOpen(!isOpen)

  return (
    <Container>
      <CustomTooltip title="Menu" placement="left">
        <MenuIcon
          className={isOpen ? "open" : undefined}
          onClick={handleClickMenu}
        >
          <Icon className="icon" />
        </MenuIcon>
      </CustomTooltip>

      <CustomMenu onClose={handleCloseMenu} show={isOpen}>
        {circularMenuData.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            isOpen={isOpen}
            onClose={handleCloseMenu}
          />
        ))}
      </CustomMenu>
    </Container>
  )
}

export default CircularMenu

const Container = styled("div")(({ theme }) => ({
  position: "fixed",
  top: "25px",
  right: "90px",
  [theme.breakpoints.down(800)]: {
    right: "60px",
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& a.active .iconButton": {
    backgroundColor: theme.primary,
    color: theme.tertiary,
  },
}))

const MenuIcon = styled(IconButton)(({ theme }) => ({
  zIndex: "1800",
  position: "relative",
  width: "2.6rem",
  height: "2.6rem",
  backgroundColor: theme.tertiary,
  transition: "0.5s",
  boxShadow: "-4px 7px 12px -5px rgba(0,0,0,0.2)",
  "&:hover": {
    backgroundColor: theme.primary,
    ".icon, .icon::before, .icon::after": {
      backgroundColor: theme.tertiary,
    },
  },
  "&.open": {
    ".icon": {
      transform: "rotate(-90deg)",
      "&::before": {
        transform: "rotateZ(-45deg) scaleX(0.65) translate(-9px, -3px)",
      },
      "&::after": {
        transform: "rotateZ(45deg) scaleX(0.65) translate(-9px, 3px)",
      },
    },
  },
}))

const Icon = styled("div")(({ theme }) => ({
  transitionDuration: "0.5s",
  position: "absolute",
  height: "2.5px",
  width: "20px",
  top: "19px",
  borderRadius: "4px",
  backgroundColor: theme.secondary,

  "&::before, &::after": {
    borderRadius: "4px",
    transitionDuration: "0.5s",
    position: "absolute",
    height: "2.5px",
    width: "20px",
    backgroundColor: theme.secondary,
    content: '""',
    left: "0",
  },
  "&::before": {
    top: "-6px",
  },
  "&::after": {
    top: "6px",
  },
}))
