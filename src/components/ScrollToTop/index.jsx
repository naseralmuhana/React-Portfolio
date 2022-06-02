import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import { styled } from "@mui/system"
import { IoIosArrowUp } from "react-icons/io"
import CustomTooltip from "../CustomTooltip"
import { useVisibility } from "../../hooks"
import { animateScroll as scroll } from "react-scroll"

const ScrollToTop = () => {
  const isVisible = useVisibility()

  const handleScroll = () => {
    scroll.scrollToTop()
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // })
  }

  return (
    <Container isvisible={isVisible.toString()}>
      <CustomTooltip title="Back To Top">
        <IconButton
          className="iconButton"
          onClick={handleScroll}
          aria-label="Back to top"
        >
          <IoIosArrowUp className="icon" />
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
  right: "40px",
  zIndex: "1000",
  transition: "transform 0.25s linear",
  transform: isvisible === "true" ? "translateX(0)" : "translateX(100px)",
  [theme.breakpoints.down(800)]: {
    right: "10px",
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

  "& .icon": {
    fontSize: "1.5rem",
  },
}))
