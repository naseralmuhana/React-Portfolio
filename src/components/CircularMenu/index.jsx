import { styled } from "@mui/system"
import { useState } from "react"
import { circularMenuData } from "../../data/circularMenuData"
import CircularPlanet from "../UI/CircularPlanet"
import CircularItem from "../UI/CircularPlanet/CircularItem"
import { RiMenuUnfoldLine } from "react-icons/ri"

const CircularMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleCloseMenu = () => setIsOpen(false)
  const handleClickMenu = () => setIsOpen(!isOpen)

  return (
    <Container>
      <CircularPlanet
        onClick={handleClickMenu}
        onClose={handleCloseMenu}
        open={isOpen}
        icon={RiMenuUnfoldLine}
        title={`Menu`}
      >
        {circularMenuData.map(({ id, label, icon, placement, to }) => (
          <CircularItem
            key={id}
            id={id}
            label={label}
            icon={icon}
            placement={placement}
            to={to}
            onClick={handleCloseMenu}
          />
        ))}
        {/*  9 Divs */}
        {[...Array(23).keys()].map((index) => (
          <div key={index} />
        ))}
      </CircularPlanet>
    </Container>
  )
}

export default CircularMenu

export const Container = styled("div")(({ theme }) => ({
  position: "fixed",
  top: "35px",
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
  "& .main-btn": {
    transform: "rotate(0deg)",
    transition: "all 0.6s ease",
  },
  "& .open": {
    transform: "rotate(-225deg)",
    backgroundColor: theme.primary,
    color: theme.tertiary,
  },
}))
