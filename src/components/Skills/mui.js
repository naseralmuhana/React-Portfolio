import { styled } from "@mui/material"
import "../../App.css"

// Skills Section
export const Section = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "2.5rem 2rem 2rem",
  backgroundColor: theme.secondary,
  minHeight: "60vh",
  [theme.breakpoints.between(992, 1380)]: {
    padding: "2rem 1rem 1rem",
  },
  [theme.breakpoints.down(992)]: {
    padding: "1rem",
    minHeight: "100%",
  },
  [theme.breakpoints.down(800)]: {
    padding: "0.5rem",
  },
}))

/**
 * Skills Header
 * Content => [Title]
 */

// Skills Header
export const Header = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

// Skills Title
export const Title = styled("h2")(({ theme }) => ({
  color: theme.primary,
  textAlign: "center",
  fontFamily: "var(--primaryFont)",
  fontSize: "3.5rem",
  [theme.breakpoints.down(992)]: {
    fontSize: "3.2rem",
  },
  [theme.breakpoints.down(800)]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.down(600)]: {
    fontSize: "2.5rem",
  },
}))

/**
 * Skills Body
 * Content => [Scroll(Cards)]
 */

// Skills Body
export const Body = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  padding: "0 2rem",
  marginTop: "3.5rem",
  [theme.breakpoints.between(992, 1380)]: {
    padding: "1.5rem",
    marginTop: "1.5rem",
  },
  [theme.breakpoints.down(992)]: {
    padding: "1rem",
    margin: "1rem 0",
  },
  [theme.breakpoints.down(800)]: {
    padding: "0.5rem",
  },
}))

// Skills Scroll
export const Scroll = styled("div")(({ theme }) => ({
  width: "100%",
  margin: "0 2rem",
  [theme.breakpoints.down(800)]: {
    margin: "0",
  },
}))

// Skills Card
export const Card = styled("div")(({ theme }) => ({
  backgroundColor: theme.secondary,
  boxShadow: `0px 0px 30px ${theme.primary30}`,
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "160px",
  height: "160px",
  padding: "2rem 1rem",
  margin: "1.5rem",
  transition: "300ms ease-in-out",
  "&:hover": {
    transform: "scale(1.15)",
  },
  [theme.breakpoints.down(992)]: {
    width: "150px",
    height: "150px",
    margin: "1.2rem",
  },
  [theme.breakpoints.down(600)]: {
    width: "135px",
    height: "135px",
  },
}))

// Skills Card Image
export const CardImage = styled("img")(({ theme }) => ({
  height: "50px",
  pointerEvents: "none",
  [theme.breakpoints.down(992)]: {
    height: "45px",
  },
  [theme.breakpoints.down(800)]: {
    height: "40px",
  },
}))

// Skills Card Title
export const CardTitle = styled("h3")(({ theme }) => ({
  color: theme.tertiary,
  fontFamily: "Big Shoulders Text",
  fontSize: "22px",
  textAlign: "center",
  fontWeight: "500",
  marginTop: "1rem",
  [theme.breakpoints.down(992)]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down(800)]: {
    fontSize: "18px",
  },
}))
