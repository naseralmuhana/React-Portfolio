import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import { styled } from "@mui/system"
import { useEffect, useState } from "react"
import { Slide } from "react-awesome-reveal"
import { IoIosArrowDropupCircle } from "react-icons/io"
import CustomTooltip from "../UI/CustomTooltip"

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setIsVisible(true)
    } else if (scrolled <= 300) {
      setIsVisible(false)
    }
  }
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  window.addEventListener("scroll", toggleVisibility)
  // useEffect(() => {
  //   return () => {
  //     window.removeEventListener("scroll", toggleVisibility)
  //   }
  // }, [])

  return (
    <Container isvisible={isVisible.toString()}>
      <CustomTooltip title="Back To Top">
        <IconButton onClick={handleScroll} aria-label="Back to top">
          <IoIosArrowDropupCircle className="icon" />
        </IconButton>
      </CustomTooltip>
    </Container>
  )
}

export default ScrollToTop

const Container = styled(Box)(({ theme, isvisible }) => ({
  // display: isvisible === "true" ? "inline" : "none",
  // transform: isvisible === "true" ? "scale(1)" : "scale(0)",
  position: "fixed",
  bottom: "40px",
  right: "30px",
  zIndex: "1000",
  transition: "transform 0.25s linear",
  transform: isvisible === "true" ? "translateX(0)" : "translateX(100px)",
  [theme.breakpoints.down(800)]: {
    right: "10px",
  },
  "& .icon": {
    fontSize: "3rem",
    color: theme.tertiary,
    [theme.breakpoints.down(800)]: {
      fontSize: "2.75rem",
    },
  },
}))
