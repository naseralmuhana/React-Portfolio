import { styled } from "@mui/material"
import "../../App.css"

// Services Section
export const Section = styled("section")(({ theme }) => ({
  backgroundColor: theme.secondary,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  minHeight: "100vh",
  padding: "3.7rem",
  [theme.breakpoints.between(992, 1380)]: {
    padding: "2.7rem",
  },
  [theme.breakpoints.down(992)]: {
    padding: "1.7rem",
  },
  [theme.breakpoints.down(800)]: {
    padding: "1rem",
  },
  [theme.breakpoints.down(600)]: {
    padding: "0.5rem",
  },
}))

/**
 * Services Header
 * Content => [Title]
 */

// Services Header
export const Header = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
})

// Services Title
export const Title = styled("h1")(({ theme }) => ({
  color: theme.primary,
  fontFamily: "var(--primaryFont)",
  fontSize: "3.5rem",
  marginBottom: "20px",
  [theme.breakpoints.down(800)]: {
    fontSize: "3rem",
    marginBottom: "30px",
  },
  [theme.breakpoints.down(600)]: {
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
}))

/**
 * Services Body
 * Content => [Description, cards container]
 */

// Services Body
export const Body = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  marginBottom: "2rem",
})

// Services Body Description
export const Description = styled("p")(({ theme }) => ({
  color: theme.tertiary80,
  fontFamily: "var(--primaryFont)",
  fontWeight: 400,
  fontSize: "1.5rem",
  width: "60%",
  marginBottom: "6rem",
  textAlign: "center",
  [theme.breakpoints.between(992, 1380)]: {
    width: "70%",
  },
  [theme.breakpoints.down(992)]: {
    width: "85%",
    marginBottom: "4rem",
    fontSize: "1.25rem",
  },
  [theme.breakpoints.down(800)]: {
    width: "95%",
    marginBottom: "3rem",
    fontSize: "1.05rem",
  },
  [theme.breakpoints.down(600)]: {
    width: "80%",
  },
}))

// Services Cards Container
export const CardsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  gap: "4.5rem",
  [theme.breakpoints.down(992)]: {
    gap: "2.5rem",
  },
  [theme.breakpoints.down(800)]: {
    gap: "2rem",
  },
  [theme.breakpoints.down(600)]: {
    gap: "1rem",
  },
}))
