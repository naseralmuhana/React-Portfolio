import { styled } from "@mui/material/styles"
import { AiOutlineHome } from "react-icons/ai"
import Grid from "@mui/material/Grid"
import "../../App.css"

// Template Section
export const Section = styled("section")(({ theme }) => ({
  backgroundColor: theme.secondary,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  minHeight: "100vh",
}))

/**
 * Template Header
 * Content => [Title, Icon]
 */

// Header & Title
export const Header = styled("div")(({ theme }) => ({
  backgroundColor: theme.primary,
  height: "35vh",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  [theme.breakpoints.down(992)]: {
    height: "25vh",
  },
  [theme.breakpoints.down(400)]: {
    height: "20vh",
  },
  "& > h1": {
    color: theme.secondary,
    fontSize: "4rem",
    fontFamily: "var(--primaryFont)",
    [theme.breakpoints.down(550)]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.down(400)]: {
      fontSize: "2.5rem",
    },
  },
}))

// Icon
export const HomeIcon = styled(AiOutlineHome)(({ theme }) => ({
  color: theme.secondary,
  position: "absolute",
  top: 25,
  left: 25,
  padding: "7px",
  borderRadius: "50%",
  boxSizing: "content-box",
  fontSize: "2rem",
  cursor: "pointer",
  boxShadow:
    theme.type === "dark"
      ? "3px 3px 6px #ffffff40, -3px -3px 6px #00000050"
      : "3px 3px 6px #ffffff40, -3px -3px 6px #00000050",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    color: theme.tertiary,
    transform: "scale(1.1)",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.8rem",
  },
}))

/**
 * Template Body
 * Content => [ Search,  Content]
 */

// Body
export const Body = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
  padding: "3rem 2rem",
})

// Search & Input
export const Search = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  '& > input[type="text"]': {
    color: theme.tertiary,
    width: "60%",
    height: "2.75rem",
    outline: "none",
    border: "none",
    borderRadius: "20px",
    padding: "0.95rem 1rem",
    fontFamily: "'Noto Sans TC', sans-serif",
    fontWeight: 500,
    fontSize: "0.9rem",
    backgroundColor: theme.secondary,
    boxShadow:
      theme.type === "dark"
        ? "inset 3px 3px 6px #ffffff10, inset -3px -3px 6px #00000060"
        : "inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030",
    "&::placeholder": {
      color: theme.tertiary80,
    },

    [theme.breakpoints.down("sm")]: {
      width: "75%",
    },
  },
}))

// Content
export const Content = styled("div")({
  marginTop: "5rem",
  width: "100%",
})

// GridContainer
export const GridContainer = styled(Grid)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  gap: "4rem",
  [theme.breakpoints.down(992)]: {
    gap: "3rem",
  },
  [theme.breakpoints.down(702)]: {
    gap: "1.5rem",
  },
}))
