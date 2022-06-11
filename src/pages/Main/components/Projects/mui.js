import { styled } from "@mui/material/styles"
import "../../../../App.css"

// Projects Section
export const Section = styled("section")(({ theme }) => ({
  backgroundColor: theme.secondary,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  minHeight: "100vh",
  padding: "2rem",
  overflowX: "hidden",
}))

/**
 * Projects Body
 * Content => [Cards, ViewAll Button]
 */

// Projects Body
export const Body = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
})

// Projects Cards Container
export const CardsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  gap: "4.5rem",
  [theme.breakpoints.down(1100)]: {
    gap: "2.75rem",
  },
  [theme.breakpoints.down(992)]: {
    flexWrap: "wrap",
    gap: "3.5rem",
  },
  [theme.breakpoints.down(800)]: {
    flexDirection: "column",
  },
}))
