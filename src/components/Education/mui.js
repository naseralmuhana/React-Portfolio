import { styled } from "@mui/material"
import "../../App.css"

// Eduction Section
export const Section = styled("section")(({ theme }) => ({
  backgroundColor: theme.secondary,
  minHeight: "100vh",
  [theme.breakpoints.down(992)]: {
    minHeight: "100%",
  },
}))

/**
 * Eduction Body
 * Content => [Description, Title, Card]
 */

// Eduction Body
export const Body = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  color: "hsla(117, 56%, 49%, 0.702)",
})

// Eduction Description Container
export const Description = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  flex: 0.65,
  width: "100%",
  padding: "2rem",
  marginLeft: "7%",
  [theme.breakpoints.down(992)]: {
    flex: 1,
    margin: "auto",
  },
  [theme.breakpoints.down(800)]: {
    padding: "1rem",
  },
}))

// Eduction Description Title
export const Title = styled("h1")(({ theme }) => ({
  color: theme.primary,
  fontSize: "3.5rem",
  fontFamily: "var(--primaryFont)",
  marginBottom: "2rem",
  [theme.breakpoints.down(992)]: {
    fontSize: "3.2rem",
  },
  [theme.breakpoints.down(800)]: {
    fontSize: "3rem",
    alignSelf: "center",
  },
  [theme.breakpoints.down(600)]: {
    fontSize: "2.5rem",
  },
}))

// Image Container
export const ImageContainer = styled("div")(({ theme }) => ({
  flex: 0.35,
  padding: "1rem",
  marginTop: "1rem",
  pointerEvents: "none",
  [theme.breakpoints.down(992)]: {
    display: "none",
  },
}))
