import { styled } from "@mui/material"

import "../../../App.css"

// Card Container
export const Card = styled("div")(({ theme }) => ({
  backgroundColor: theme.primary30,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "180px",
  height: "180px",
  padding: "1.4rem",
  boxShadow: "4px 4px 8px rgba(36, 3, 3, 0.2)",
  borderRadius: "20px",
  transition: "transform 300ms ease-in-out, background-color 300ms ease-in-out",
  //   overflow: "hidden",
  "@keyframes magic": {
    "0%, 100%": {
      transform: "translate(0,0)",
    },
    "25%": {
      transform: "translate(0,-20px)",
    },
    "50%": {
      transform: "translate(0,0px)",
    },
    "75%": {
      transform: "translate(0,-10px)",
    },
  },
  "@keyframes slide-up-fade": {
    "0%, 100%": {
      transform: "translate(0,0)",
      opacity: 1,
    },
    "33%": {
      transform: "translate(0,-50px)",
      opacity: 0,
    },
    "67%": {
      transform: "translate(0,50px)",
      opacity: 0,
    },
  },
  "&:hover": {
    transform: "scale(1.15)",
    backgroundColor: theme.primary50,
  },
  "&:hover svg": {
    animation:
      "slide-up-fade 0.7s ease-in-out, magic 0.7s 0.7s ease-in-out infinite",
  },
  //   "&:active svg": {
  //     animation:
  //       "slide-up-fade 0.7s ease-in-out, magic 0.7s 0.7s ease-in-out infinite",
  //   },
  [theme.breakpoints.down(800)]: {
    width: "160px",
    height: "160px",
    padding: "1.2rem",
  },
  [theme.breakpoints.down(600)]: {
    width: "150px",
    height: "150px",
  },
}))

/**
 * Card Content
 * content => [icon ,title]
 */

// Card Content
export const Content = styled("div")(({ theme }) => ({
  color: theme.tertiary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "150px",
  position: "relative",
  padding: "1rem",
}))

// Card Icon Container
export const IconContainer = styled("i")(({ theme }) => ({
  position: "absolute",
  top: "15%",
  "& > svg": {
    fontSize: "2.8rem",
    [theme.breakpoints.down(800)]: {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.down(600)]: {
      fontSize: "2.2rem",
    },
  },
}))

// Card Title
export const Title = styled("h4")(({ theme }) => ({
  color: theme.tertiary,
  position: "absolute",
  top: "60%",
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "var(--primaryFont)",
  fontWeight: "600",
  fontSize: "16px",
  textAlign: "center",
  lineHeight: "110%",

  [theme.breakpoints.down(800)]: {
    fontSize: "15px",
  },
  [theme.breakpoints.down(600)]: {
    fontSize: "13px",
    top: "50%",
  },
}))
