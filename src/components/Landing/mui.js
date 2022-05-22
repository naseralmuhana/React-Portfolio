import { Box, Button, styled } from "@mui/material"
import "../../App.css"

// Section
export const LandingSection = styled("section")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
})

// Main Container
export const LandingContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
  position: "relative",
  [theme.breakpoints.down(600)]: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
}))

/**
 * Left Container
 * Content => [Socials Icon]
 */

// Left Container
export const LandingContainerLeft = styled("div")(({ theme }) => ({
  backgroundColor: theme.primary,
  flex: "35%",
  height: "100%",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-start",
  [theme.breakpoints.down(900)]: {
    flex: "45%",
  },
  [theme.breakpoints.down(600)]: {
    flex: "initial",
    width: "100%",
    height: "30%",
  },
}))

// Content Container
export const LCLContent = styled("div")(({ theme }) => ({
  margin: "3rem",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  [theme.breakpoints.down(1100)]: {
    margin: "2rem",
  },
}))

// Social Icon
export const SocialIcon = styled(Box)(({ theme }) => ({
  color: theme.secondary,
  fontSize: "35px",
  margin: "0 1rem",
  transition: "transform 0.5s",
  "&:hover": {
    transform: "scale(1.2)",
  },
  [theme.breakpoints.down(900)]: {
    fontSize: "30px",
  },
  [theme.breakpoints.down(600)]: {
    display: "none",
  },
}))

/**
 * Centered Rounded Image
 * Content => [img]
 */

// Rounded Image
export const LandingImage = styled("img")(({ theme, draweropen }) => {
  const opacity = draweropen === "true" ? 0 : 1
  return {
    borderColor: theme.secondary,
    position: "absolute",
    left: "35%",
    transform: "translateX(-50%)",
    width: "400px",
    height: "400px",
    objectFit: "cover",
    borderRadius: "50%",
    boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.2)",
    transition: "opacity 0.3s",
    opacity: opacity,
    [theme.breakpoints.down(1100)]: {
      width: "350px",
      height: "350px",
    },
    [theme.breakpoints.down(900)]: {
      width: "300px",
      height: "300px",
      left: "45%",
    },
    [theme.breakpoints.down(600)]: {
      width: "200px",
      height: "200px",
      left: "50%",
      top: "30%",
      border: `8px solid ${theme.secondary}`,
      transform: "translate(-50%, -50%)",
    },
  }
})

/**
 * Right Container
 * Content => [Title , Name , Description, Actions]
 */

// Right Container
export const LandingContainerRight = styled("div")(({ theme }) => ({
  backgroundColor: theme.secondary,
  flex: "65%",
  height: "100%",
  flexDirection: "column",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  [theme.breakpoints.down(900)]: {
    flex: "55%",
  },
  [theme.breakpoints.down(600)]: {
    flex: "initial",
    width: "100%",
    height: "70%",
    alignItems: "center",
    padding: "0 2rem",
  },
}))

// Content Container
export const LCRContent = styled("div")(({ theme }) => ({
  color: theme.tertiary,
  marginRight: "7rem",
  width: "45%",
  fontFamily: "var(--primaryFont)",
  fontStyle: "normal",
  [theme.breakpoints.down(900)]: {
    width: "60%",
    marginTop: "10%",
    marginRight: "6%",
  },
  [theme.breakpoints.down(600)]: {
    width: "100%",
    marginRight: "initial",
    marginTop: "20%",
  },
  [theme.breakpoints.down(500)]: {
    marginTop: "35%",
  },
  [theme.breakpoints.down(370)]: {
    marginTop: "35%",
  },
}))

// Title
export const LCRTitle = styled("h6")(({ theme }) => ({
  fontWeight: 500,
  fontSize: "1.25rem",
  marginBottom: "-0.85rem",
  opacity: 0.8,
  [theme.breakpoints.down(1100)]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.down(600)]: {
    fontSize: "1rem",
    textAlign: "center",
  },
}))

// Name
export const LCTName = styled("h1")(({ theme }) => ({
  fontWeight: 600,
  fontSize: "3.25rem",
  margin: "1rem 0",
  lineHeight: "110%",
  [theme.breakpoints.down(1100)]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.down(600)]: {
    fontSize: "2.5rem",
    textAlign: "center",
  },
}))

// Description
export const LCTDescription = styled("p")(({ theme }) => ({
  fontWeight: 500,
  fontSize: "1.15rem",
  marginTop: "1.45rem",
  opacity: 0.7,
  [theme.breakpoints.down(1100)]: {
    fontSize: "1rem",
    marginTop: "0.3rem",
    marginBottom: "1rem",
  },
  [theme.breakpoints.down(600)]: {
    width: "90%",
    fontSize: "0.95rem",
    margin: "0 auto",
    textAlign: "center",
  },
}))

// Actions Container
export const LCTActionsContainer = styled("div")(({ theme }) => ({
  width: "350px",
  marginTop: "2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontFamily: "var(--primaryFont)",
  [theme.breakpoints.down(1100)]: {
    marginTop: "1rem",
    flexDirection: "column",
    width: "200px",
    height: "120px",
    alignItems: "flex-start",
  },
  [theme.breakpoints.down(600)]: {
    margin: "0 auto",
    alignItems: "center",
    justifyContent: "center",
    "&  button": {
      marginTop: "-20%",
    },
  },
}))

// Resume Button
export const ResumeButton = styled(Button)(({ theme }) => ({
  color: theme.primary,
  borderRadius: "30px",
  textTransform: "inherit",
  textDecoration: "none",
  width: "150px",
  fontSize: "1rem",
  fontWeight: "500",
  height: "50px",
  fontFamily: "var(--primaryFont)",
  border: `3px solid ${theme.primary}`,
  transition: "100ms ease-out",
  "&:hover": {
    backgroundColor: theme.tertiary,
    color: theme.secondary,
    border: `3px solid ${theme.tertiary}`,
  },
  [theme.breakpoints.down("sm")]: {
    width: "180px",
  },
}))

// Contact Button
export const ContactButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.primary,
  color: theme.secondary,
  borderRadius: "30px",
  textTransform: "inherit",
  textDecoration: "none",
  width: "150px",
  height: "50px",
  fontSize: "1rem",
  fontWeight: "500",
  fontFamily: "var(--primaryFont)",
  border: `3px solid ${theme.primary}`,
  transition: "100ms ease-out",
  "&:hover": {
    backgroundColor: theme.secondary,
    color: theme.tertiary,
    border: `3px solid ${theme.tertiary}`,
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}))