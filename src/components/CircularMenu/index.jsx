import { styled } from "@mui/system"
import { useVisibility } from "../../hooks"
import { useEffect, useState } from "react"
import { circularMenuData } from "../../data/circularMenuData"
import CircularPlanet from "./CircularPlanet"
import CircularItem from "./CircularItem"
import { useMediaQuery } from "@mui/material"

const CircularMenu = () => {
  const matches = useMediaQuery("(max-width:600px)")
  const isVisible = useVisibility(matches)
  const [isOpen, setIsOpen] = useState(false)

  const handleCloseMenu = () => setIsOpen(false)
  const handleClickMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    if (!isVisible) {
      setIsOpen(false)
    }
  }, [isVisible, isOpen])

  return (
    <Container isvisible={isVisible.toString()}>
      <CircularPlanet
        onClick={handleClickMenu}
        onClose={handleCloseMenu}
        open={isVisible && isOpen}
      >
        {circularMenuData.map((item) => (
          <CircularItem key={item.id} item={item} onClick={handleCloseMenu} />
        ))}
        {/*  9 Divs */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <div key={index} />
        ))}
      </CircularPlanet>
    </Container>
  )
}

export default CircularMenu

export const Container = styled("div")(({ theme, isvisible }) => ({
  position: "fixed",
  bottom: "50%",
  right: "80px",
  zIndex: "1000",
  transition: "transform 0.25s linear",
  transform: isvisible === "true" ? "translateX(0)" : "translateX(120px)",
  [theme.breakpoints.down(800)]: {
    right: "50px",
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
  },
}))
