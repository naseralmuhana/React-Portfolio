import Stack from "@mui/material/Stack"
import Drawer from "@mui/material/Drawer"
import { styled } from "@mui/material/styles"
import { IoHomeSharp, IoMenuSharp } from "react-icons/io5"
import Close from "@mui/icons-material/Close"

export const NavbarStack = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  position: "absolute",
  backgroundColor: "transparent",
  height: "6.5rem",
  zIndex: 99,
}))

export const NavbarContainerStack = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  flexDirection: "row",
  padding: "0 3rem",
  marginTop: "1rem",
  [theme.breakpoints.down(1100)]: { padding: "0 2rem" },
}))

// Name Logo (LeftSide)
export const NavbarLogo = styled("h1")(({ theme }) => ({
  fontFamily: "BestermindRegular",
  color: theme.secondary,
  fontSize: "2.5rem",
  userSelect: "none",
  [theme.breakpoints.down(1100)]: { fontSize: "2.2rem" },
}))

// Hamburger Menu Button (RightSide)
export const NavbarMenuIcon = styled(IoMenuSharp)(({ theme }) => ({
  fontSize: "2.5rem",
  color: theme.tertiary,
  cursor: "pointer",
  transform: "translateY(-10px)",
  transition: "color 0.3s",
  "&:hover": {
    color: theme.primary,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "2rem",
  },
}))

export const CustomDrawer = styled(Drawer)(({ theme }) => ({
  padding: "0em 1.8em",
  width: "14em",
  fontFamily: "var(--primaryFont)",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "24px",
  background: theme.secondary,
  overflow: "hidden",
  borderTopRightRadius: "40px",
  borderBottomRightRadius: "40px",
  // "& > .MuiBackdrop-root": {
  //   backgroundColor: "rgba(33, 33, 33, 0.15) !important",
  //   backdropFilter: "blur(20px) !important",
  // },
  [theme.breakpoints.down("sm")]: {
    width: "12em",
  },
}))

export const CloseBtnIcon = styled(Close)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: "bold",
  cursor: "pointer",
  color: theme.primary,
  position: "absolute",
  right: 40,
  top: 40,
  zIndex: 1400,
  transition: "color 0.2s",
  "&:hover": {
    color: theme.tertiary,
  },
  [theme.breakpoints.down("sm")]: {
    right: 20,
    top: 20,
  },
}))

export const NavLinkContainer = styled("div")(({ theme }) => ({
  marginTop: "5rem",
  [theme.breakpoints.down(800)]: {
    marginTop: "3rem",
  },
}))

export const CustomDrawerItem = styled("div")(({ theme }) => ({
  margin: "2rem auto",
  borderRadius: "78.8418px",
  background: theme.secondary,
  color: theme.primary,
  width: "85%",
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  padding: "0 30px",
  boxSizing: "border-box",
  border: "2px solid",
  borderColor: theme.primary,
  transition: "background-color 0.2s, color 0.2s",
  "&:hover": {
    background: theme.primary,
    color: theme.secondary,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: "0 25px",
    height: "55px",
  },
}))

export const CustomDrawerLink = styled("span")(({ theme }) => ({
  fontFamily: "var(--primaryFont)",
  width: "50%",
  fontSize: "1.3rem",
  fontWeight: 600,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.125rem",
  },
}))
export const CustomDrawerIcon = styled(IoHomeSharp)(({ theme }) => ({
  fontSize: "1.6rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.385rem",
  },
}))
