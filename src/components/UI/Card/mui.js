import { styled } from "@mui/material/styles"
import "../../../App.css"

/**
 * Card
 *
 */

// Container
export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  width: "90%",
  height: "140px",
  padding: "1.5rem",
  marginBottom: "1.5rem",
  borderRadius: "20px",
  transition: "background-color 200ms ease-in-out",
  backgroundColor: theme.primary30,
  "&:hover": {
    backgroundColor: theme.primary50,
  },
  [theme.breakpoints.down(992)]: {
    width: "100%",
  },
  [theme.breakpoints.down(800)]: {
    padding: "1rem",
    height: "130px",
  },
}))

// Image Container
export const ImageContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.primary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: "0",
  width: "55px",
  height: "55px",
  borderRadius: "50px",
  [theme.breakpoints.down(800)]: {
    width: "45px",
    height: "45px",
  },
}))

// Rounded Image
export const Image = styled("img")(({ theme }) => ({
  width: "40px",
  [theme.breakpoints.down(800)]: {
    width: "30px",
  },
}))

//  Duration
export const Duration = styled("h6")(({ theme }) => ({
  color: theme.primary,
  fontFamily: "var(--primaryFont)",
  fontSize: "0.85rem",
  fontWeight: "700",
  marginBottom: "0.5rem",
  [theme.breakpoints.down(800)]: {
    marginBottom: "0.45rem",
  },
}))

// Title
export const Title = styled("h4")(({ theme }) => ({
  color: theme.tertiary,
  fontFamily: "var(--primaryFont)",
  fontSize: "1.225rem",
  fontWeight: "600",
  [theme.breakpoints.down(800)]: {
    fontSize: "1.125rem",
    lineHeight: "126%",
  },
}))

// Content
export const Content = styled("h5")(({ theme }) => ({
  color: theme.tertiary80,
  fontFamily: "var(--primaryFont)",
  fontSize: "1.15rem",
  fontWeight: "600",
  [theme.breakpoints.down(800)]: {
    fontSize: "1.05rem",
    lineHeight: "126%",
  },
}))
