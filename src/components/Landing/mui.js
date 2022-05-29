import { styled } from "@mui/material/styles"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import "../../App.css"

// Landing Section
export const Section = styled("section")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
})

/**
 * Landing Body
 * Content => [Left Container, Right Container]
 */

// Landing Body
export const Body = styled("div")(({ theme, draweropen }) => ({
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
export const LeftContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.primary,
  flex: "35%",
  height: "100%",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-start",
  [theme.breakpoints.down(900)]: {
    flex: "35%",
  },
  [theme.breakpoints.down(600)]: {
    flex: "initial",
    width: "100%",
    height: "30%",
  },
}))

// Left Container Content
export const LeftContainerContent = styled("div")(({ theme }) => ({
  margin: "3rem",
  width: "100%",
  display: "flex",
  alignItems: "center",

  justifyContent: "flex-start",
  [theme.breakpoints.down(1100)]: {
    margin: "2rem",
  },
  "& a": {
    display: "flex",
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
 * Content => [Image]
 */

// Rounded Image
export const Blob = styled("div")(({ theme, src, draweropen }) => ({
  "@keyframes morph": {
    "0%, 100%": {
      borderRadius: "42% 56% 72% 28% / 42% 42% 56% 48%",
    },
    "33%": {
      borderRadius: "72% 28% 48% 48% / 28% 28% 72% 72%",
    },
    "66%": {
      borderRadius: "100% 56% 56% 100% / 100% 100% 56% 56%",
    },
  },
  position: "absolute",
  left: "35%",
  transform: "translateX(-50%)",

  width: "400px",
  height: "400px",
  borderRadius: "42% 56% 72% 28% / 42% 42% 56% 48%",
  animation: "morph 3.75s linear infinite",
  background: `url(${src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.2)",
  transition: "opacity 0.3s",
  opacity: draweropen === "true" ? 0 : 1,
  zIndex: 1,
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
    // border: `8px solid ${theme.secondary}`,
    transform: "translate(-50%, -50%)",
  },
}))

/**
 * Right Container
 * Content => [Title , Name , Description, Actions(Resume Button, Contact Button)]
 */

// Right Container
export const RightContainer = styled("div")(({ theme }) => ({
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
export const RightContainerContent = styled("div")(({ theme }) => ({
  color: theme.tertiary,
  marginRight: "7rem",
  width: "45%",
  fontFamily: "var(--primaryFont)",
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
export const Title = styled("h6")(({ theme }) => ({
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
export const Name = styled("h1")(({ theme }) => ({
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
export const Description = styled("p")(({ theme }) => ({
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

// Actions
export const Actions = styled("div")(({ theme }) => ({
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
export const ResumeBtn = styled(Button)(({ theme }) => ({
  color: theme.primary,
  borderRadius: "30px",
  textTransform: "inherit",
  textDecoration: "none",
  width: "150px",
  fontSize: "1rem",
  fontWeight: 500,
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
export const ContactBtn = styled(Button)(({ theme }) => ({
  backgroundColor: theme.primary,
  color: theme.secondary,
  borderRadius: "30px",
  textTransform: "inherit",
  textDecoration: "none",
  width: "150px",
  height: "50px",
  fontSize: "1rem",
  fontWeight: 500,
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
