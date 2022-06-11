import { styled } from "@mui/material/styles"
import "../../../../../App.css"

/**
 * Card
 * content => []
 */

// Card
export const Card = styled("a")(({ theme }) => ({
  // backgroundColor: theme.primary400,
  height: "100%",
  width: "100%",
  // height: "420px",
  // width: "320px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "baseline",
  borderRadius: "5px",
  // backgroundColor: theme.primary80,
  transition: "transform 300ms ease-in-out, background-color 300ms ease-in-out",
  backgroundColor: theme.primary30,
  "&:hover": {
    transform: "scale(1.05)",
    // backgroundColor: theme.primary400,
    backgroundColor: theme.primary50,
  },
  "&:hover .image-container>img": {
    filter: "grayscale(0)",
    transform: "scale(1.0)",
  },
  [theme.breakpoints.down(360)]: {
    transform: "scale(0.9)",
  },
}))

// Image Container &Image Style
export const ImageContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.secondary,
  height: "50%",
  width: "100%",
  overflow: "hidden",
  borderTopLeftRadius: "5px",
  borderTopRightRadius: "5px",
  "& > img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    transform: "scale(1.3)",
    filter: "blur(1px)",
    transition: "transform 1s, filter 2s ease-in-out",
    [theme.breakpoints.down(600)]: {
      filter: "blur(0)",
    },
  },
}))

// Body
export const Body = styled("div")(({ theme }) => ({
  padding: "1rem",
  fontFamily: "var(--primaryFont)",
  "& p": {
    // color: theme.secondary50,
    color: theme.tertiary50,
    fontSize: "13px",
    fontWeight: "600",
    marginBottom: "0.65rem",
  },
  "& h3": {
    // color: theme.secondary,
    color: theme.tertiary,
    fontSize: "19px",
    lineHeight: "115%",
    marginBottom: "0.55rem",
  },
  "& h6": {
    // color: theme.secondary,
    color: theme.tertiary,
    fontFamily: "Noto Sans TC",
    fontSize: "15px",
    lineHeight: "139%",
    fontWeight: "500",
    opacity: 0.9,
  },
}))
