import { styled } from "@mui/material/styles"
import "../../../../App.css"

// Section used for [Education, Experience]
export const Section = styled("section")(({ theme }) => ({
  backgroundColor: theme.secondary,
  minHeight: "100vh",
  overflow: "hidden",
  [theme.breakpoints.down(992)]: {
    minHeight: "100%",
  },
}))

// Section Body
export const Body = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
})

// Section Description Container
export const DescriptionContainer = styled("div")(({ theme }) => ({
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
  // [theme.breakpoints.down(800)]: {
  //   padding: "1rem",
  // },
}))

// Section Image Container
export const ImageContainer = styled("div")(({ theme }) => ({
  flex: 0.35,
  padding: "1rem",
  marginTop: "1rem",
  pointerEvents: "none",
  [theme.breakpoints.down(992)]: {
    display: "none",
  },
}))
