import { styled } from "@mui/material/styles"
import "../../../../App.css"

// Achievement  Section
export const Section = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  padding: "3rem",
  backgroundColor: theme.secondary,
  minHeight: "100vh",

  [theme.breakpoints.down(992)]: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: "2rem",
  },
  [theme.breakpoints.down(600)]: {
    padding: "1rem",
  },
}))

/**
 * Achievement Body
 * Content => [Bio(Description)]
 */

// Achievement Body
export const Body = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-evenly",
  flex: "0.4",
  width: "90%",
  [theme.breakpoints.between(992, 1380)]: {
    flex: "0.3",
  },
  [theme.breakpoints.down(992)]: {
    width: "100%",
  },
}))

// Achievement Bio(Description)
export const Bio = styled("h4")(({ theme }) => ({
  color: theme.tertiary,
  fontFamily: "Caveat",
  fontSize: "1.75rem",
  fontWeight: "400",

  [theme.breakpoints.down(600)]: {
    fontSize: "1.5rem",
  },
}))

/**
 * Achievement Cards Container
 * Content => [Cards Container]
 */

// Achievement Cards Container
export const CardsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  width: "100%",
  padding: "2rem",
  marginLeft: "5%",
  flex: "0.6",
  [theme.breakpoints.between(992, 1380)]: {
    padding: "1rem",
    flex: "0.7",
    marginLeft: "1%",
  },
  [theme.breakpoints.down(992)]: {
    marginLeft: 0,
    padding: "1rem 0",
    // width: "80%",
    width: "100%",
    marginTop: "1rem",
  },
  [theme.breakpoints.down(600)]: {
    width: "100%",
  },
}))
