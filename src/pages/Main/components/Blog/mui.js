import { styled } from "@mui/material/styles"
import "../../../../App.css"
import { HiArrowRight } from "react-icons/hi"

// Blog Section
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
 * Blog Header
 * Content => [Title]
 */

// Blog Header
export const Header = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  margin: "1rem",
})

// Blog Title
export const Title = styled("h1")(({ theme }) => ({
  color: theme.primary,
  fontFamily: "var(--primaryFont)",
  fontSize: "3.5rem",
  marginBottom: "40px",
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
 * Blog Body
 * Content => [Cards, ViewAll Button]
 */

// Blog Body
export const Body = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
})

// Blog Cards Container
export const CardsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  //   flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  gap: "4.5rem",
  [theme.breakpoints.down(992)]: {
    // flexWrap: "wrap",
    flexDirection: "column",
  },
  [theme.breakpoints.down(800)]: {
    // gap: "2.5rem",
    flexDirection: "column",
  },
  // [theme.breakpoints.down(600)]: {
  //   flexDirection: "column",
  //   flexWrap: "nowrap",
  // },
}))

// Blog ViewAll Container
export const ViewAllContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  width: "100%",
  marginTop: "1rem",
  padding: "2rem",
  "& a": {
    [theme.breakpoints.down(600)]: {
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
  [theme.breakpoints.down(600)]: {
    marginTop: "2.5rem",
    position: "relative",
  },
}))

// Blog ViewAll Button
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
  backgroundColor: theme.primary80,
  "&:hover": {
    transform: "scale(1.05)",
    color: theme.secondary,
    backgroundColor: theme.primary400,
  },
}))

// Blog ViewAll Button Icon
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
