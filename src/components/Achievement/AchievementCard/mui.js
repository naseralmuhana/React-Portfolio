import { styled } from "@mui/material/styles"
import "../../../App.css"

// Achievement Card Container
export const Card = styled("div")(({ theme }) => ({
  backgroundColor: theme.primary30,
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",
  width: "100%",
  height: "170px",
  padding: "1.5rem",
  marginBottom: "1.5rem",
  marginLeft: "1.5rem",
  transition: "background-color 200ms ease-in-out",
  borderRadius: "20px",
  position: "relative",
  "&:hover": {
    backgroundColor: theme.primary50,
  },
  [theme.breakpoints.between(992, 1380)]: {
    justifyContent: "flex-start",
  },
  [theme.breakpoints.down(992)]: {
    height: "fit-content",
    marginLeft: 0,
  },
}))

/**
 * Card Content
 * content => [details1, details2]
 */

// Card Content
export const Content = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-around",
  width: "65%",
  [theme.breakpoints.down(992)]: {
    width: "70%",
  },
}))

/**
 * details1
 * content => [Title, Details]
 */

// Card Content Title
export const Title = styled("h2")(({ theme }) => ({
  color: theme.tertiary,
  fontFamily: "var(--primaryFont)",
  fontWeight: 500,
  fontSize: "1.225rem",
  marginBottom: "6px",
  lineHeight: "110%",
  [theme.breakpoints.down(992)]: {
    fontSize: "1.15rem",
  },
}))

// Card Content Details
export const Details = styled("p")(({ theme }) => ({
  color: theme.tertiary80,
  fontFamily: "Roboto",
  fontWeight: 400,
  fontSize: "1.10rem",
  [theme.breakpoints.down(992)]: {
    fontSize: "0.95rem",
  },
}))

/**
 * details2
 * content => [Date, field]
 */

// Card Content Details2 Container
export const Details2Container = styled("div")(({ theme }) => ({
  color: theme.primary,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "50%",
  fontFamily: "var(--primaryFont)",
  fontSize: "18px",
  position: "absolute",
  bottom: "7px",
  left: "25px",
  "& > h5": {
    width: "50%",
  },
  [theme.breakpoints.down(992)]: {
    width: "85%",
  },
}))

// Card Content Field Container
export const FieldContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "50%",
  "& > svg": {
    marginRight: "6px",
  },
}))

/**
 * Card Image
 * content => [image]
 */

// Card Image Container
export const ImageContainer = styled("div")(({ theme }) => ({
  width: "23%",
  [theme.breakpoints.between(992, 1380)]: {
    marginLeft: "1rem",
  },
  [theme.breakpoints.down(992)]: {
    display: "flex",
    justifyContent: "center",
    width: "30%",
  },
}))

// Card Image
export const Image = styled("img")(({ theme }) => ({
  width: "150px",
  height: "130px",
  borderRadius: "10px",
  [theme.breakpoints.down(992)]: {
    width: "80px",
    height: "70px",
  },
  [theme.breakpoints.down(600)]: {
    width: "70px",
    height: "60px",
  },
}))
