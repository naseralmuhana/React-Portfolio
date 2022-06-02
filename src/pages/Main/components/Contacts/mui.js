import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import "../../../../App.css"
import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai"

const flexColumnStart = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
}

// Contacts Section
export const Section = styled("section")(({ theme }) => ({
  ...flexColumnStart,
  backgroundColor: theme.secondary,
  position: "relative",
  minHeight: "100vh",
}))

/**
 * Contacts Container
 * Content => [Title, Body]
 */

// Contacts Container & Title style
export const Container = styled("div")(({ theme }) => ({
  ...flexColumnStart,
  width: "80%",
  height: "100%",
  padding: "2rem 6rem 3rem",
  marginTop: "2rem",
  [theme.breakpoints.between(992, 1380)]: {
    width: "90%",
    padding: "2rem 4rem",
    marginTop: "1rem",
  },
  [theme.breakpoints.down(992)]: {
    width: "100%",
  },
  [theme.breakpoints.down(800)]: {
    alignItems: "center",
    padding: "2rem",
    marginTop: 0,
  },
  "& > h1": {
    color: theme.primary,
    fontFamily: "var(--primaryFont)",
    fontSize: "3.5rem",
    marginBottom: "2.5rem",
    [theme.breakpoints.down(992)]: {
      fontSize: "3rem",
      margin: "0 0 1.2rem 0",
    },
    [theme.breakpoints.down(800)]: {
      fontSize: "3rem",
      marginBottom: "30px",
    },
    [theme.breakpoints.down(600)]: {
      fontSize: "2.5rem",
      marginBottom: "20px",
    },
  },
}))

// Contacts Body
export const Body = styled("div")(({ theme }) => ({
  ...flexColumnStart,
  flexDirection: "row",
  width: "100%",
  [theme.breakpoints.down(800)]: {
    flexDirection: "column",
    alignItems: "center",
  },
}))

/**
 * Contacts Form
 * Content => [form]
 */

// Contacts Form Container
export const FormContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flex: 0.4,
  width: "100%",
  [theme.breakpoints.down(800)]: {
    flex: 1,
    width: "80%",
  },
  [theme.breakpoints.down(600)]: {
    width: "100%",
  },
  "& > form": {
    ...flexColumnStart,
    justifyContent: "space-evenly",
    width: "100%",
    [theme.breakpoints.down(800)]: {
      alignItems: "flex-end",
    },
  },
}))

// Contacts Form Control
export const FormControl = styled("div")(({ theme }) => ({
  width: "100%",
  "& > label": {
    backgroundColor: theme.secondary,
    color: theme.primary,
    fontFamily: "var(--primaryFont)",
    fontWeight: 600,
    fontSize: "0.9rem",
    padding: "0 5px",
    transform: "translate(25px,50%)",
    display: "inline-flex",
  },
  "& >input, & > textarea": {
    outline: "none",
    marginBottom: "2rem",
    padding: "0.7rem",
    borderRadius: "20px",
    width: "100%",
    resize: "none",
    border: `4px solid ${theme.primary80}`,
    backgroundColor: theme.secondary,
    color: theme.tertiary,
    fontFamily: "var(--primaryFont)",
    fontWeight: 500,
    transition: "border 0.2s ease-in-out",
    "&:focus": {
      border: `4px solid ${theme.primary600}`,
    },
  },
  "& > input": {
    height: "50px",
    [theme.breakpoints.down(800)]: {
      marginBottom: "0.45rem",
    },
  },
  "& > textarea": {
    height: "150px",
  },
}))

// Contacts Button Container
export const ButtonContainer = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "flex-end",
  [theme.breakpoints.down(400)]: {
    justifyContent: "center",
  },
  "& > button": {
    backgroundColor: theme.primary,
    color: theme.secondary,
    transition: "250ms ease-in-out",

    border: "none",
    outline: "none",
    width: "140px",
    height: "50px",
    borderRadius: "50px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.08)",
      color: theme.secondary,
      backgroundColor: theme.tertiary,
    },
    "&:disabled": {
      transform: "scale(1)",
      backgroundColor: theme.primary,
      color: theme.secondary,
      cursor: "default",
    },
    "& > p": {
      fontSize: "16px",
      fontFamily: "var(--primaryFont)",
    },
    "& .progress": {
      color: theme.secondary,
    },
  },
}))

// Contacts Button Icon Container
export const ButtonIconContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "5px",
}))

// Contacts Button Send Icon
export const SendIcon = styled(AiOutlineSend)(({ theme, isloading }) => ({
  "@keyframes fly": {
    "10%": {
      transform: "rotate(0deg)",
    },
    "20%": {
      transform: "translateX(-10px)",
    },
    "70%": {
      transform: "translateX(60px)",
    },
    "100%": {
      transform: "translateX(80px)",
    },
  },
  fontSize: "25px",
  transformOrigin: "center",
  transform: "translate(5px,-3px) rotate(-30deg)",
  animation: isloading === "false" ? "initial" : "fly 0.3s linear both",
  position: isloading === "true" ? "absolute" : "initial",
}))

// Contacts Button Success Icon
export const SuccessIcon = styled(AiOutlineCheckCircle)(
  ({ theme, isloading }) => ({
    display: isloading === "false" ? "none" : "inline-flex",
    opacity: isloading === "false" ? "0" : "1",
    fontSize: "28px",
    transition: "all 0.3s 0.8s ease-in-out",
  })
)

/**
 * Contacts Details
 * Content => [contact details, Social Icons]
 */
// Contacts Details
export const ContactsDetails = styled("div")(({ theme }) => ({
  ...flexColumnStart,
  justifyContent: "space-evenly",
  flex: 0.6,
  paddingLeft: "7rem",
  marginTop: "1.2rem",
  [theme.breakpoints.down(992)]: {
    paddingLeft: "4rem",
  },
  [theme.breakpoints.down(800)]: {
    paddingLeft: "0",
    padding: "1rem",
    alignItems: "center",
    marginTop: "2rem",
  },
  [theme.breakpoints.down(400)]: {
    padding: 0,
  },
}))

// Contacts Personal Details Container
export const PersonalDetailsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
  marginBottom: "2.5rem",
  [theme.breakpoints.down(800)]: {
    marginBottom: "1.8rem",
  },
  "& > p": {
    color: theme.tertiary,
    fontFamily: "var(--primaryFont)",
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "110%",
    marginLeft: "1.5rem",
    width: "45%",
    wordBreak: "break-word",
    [theme.breakpoints.down(992)]: {
      marginLeft: "1rem",
      fontSize: "1rem",
    },
    [theme.breakpoints.down(800)]: {
      marginLeft: "1.2rem",
      width: "95%",
    },
  },
}))

// Contacts Personal Details Icon
export const DetailsIconContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.primary,
  color: theme.secondary,
  borderRadius: "50%",
  width: "45px",
  height: "45px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "23px",
  transition: "250ms ease-in-out",
  flexShrink: 0,
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.1)",
    color: theme.secondary,
    backgroundColor: theme.tertiary,
  },
}))

// Contacts Social Icons container
export const SocialIconsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.5rem",
  marginTop: "4rem",
  width: "90%",
  [theme.breakpoints.down(800)]: {
    marginTop: "2rem",
    width: "100%",
  },
}))

// Contacts Social Icon
export const SocialIcon = styled("a")(({ theme }) => ({
  width: "45px",
  height: "45px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "21px",
  backgroundColor: theme.primary,
  color: theme.secondary,
  transition: "250ms ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
    color: theme.secondary,
    backgroundColor: theme.tertiary,
  },
}))

/**
 * Image
 * Content => []
 */

// Rounded Image
export const Image = styled("img")(({ theme }) => ({
  position: "absolute",
  right: 0,
  bottom: 0,
  width: "280px",
  pointerEvents: "none",
  [theme.breakpoints.between(992, 1380)]: {
    width: "240px",
  },
  [theme.breakpoints.down(992)]: {
    display: "none",
  },
}))
