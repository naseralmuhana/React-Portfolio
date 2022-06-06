import { styled } from "@mui/material/styles"
import "../../../../App.css"
import { HiArrowRight } from "react-icons/hi"

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

// Projects ViewAll Container
export const ViewAllContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  width: "100%",
  marginTop: "2rem",
  padding: "2rem",
  [theme.breakpoints.down(800)]: {
    justifyContent: "center",
  },
}))

// Projects ViewAll Button
export const ViewAllBtn = styled("button")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  outline: "none",
  border: "none",
  width: "150px",
  height: "48px",
  fontFamily: "var(--primaryFont)",
  fontSize: "1.05rem",
  fontWeight: "500",
  cursor: "pointer",
  borderRadius: "45px",
  textTransform: "inherit",
  paddingLeft: "1.5rem",
  color: theme.tertiary,
  transition: "all 300ms ease-in-out",
  backgroundColor: theme.primary30,
  "&:hover": {
    transform: "scale(1.05)",
    color: theme.secondary,
    backgroundColor: theme.primary50,
  },
  // "&:hover": {
  //   color: theme.secondary,
  //   backgroundColor: theme.primary,
  // },
}))

// Projects ViewAll Button Icon
export const ViewAllIcon = styled(HiArrowRight)(({ theme }) => ({
  color: theme.tertiary,
  backgroundColor: theme.secondary70,
  width: "40px",
  height: "40px",
  padding: "0.5rem",
  fontSize: "1.05rem",
  borderRadius: "50%",
  cursor: "pointer",
  transition: "background-color 0.2s",
  "&:hover": {
    color: theme.tertiary,
    backgroundColor: theme.secondary,
  },
}))
