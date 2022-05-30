import Stack from "@mui/material/Stack"
import { styled } from "@mui/material/styles"

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
