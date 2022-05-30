import Stack from "@mui/material/Stack"
import { styled } from "@mui/material/styles"

export const NavbarStack = styled(Stack)({
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  position: "absolute",
  backgroundColor: "transparent",
  height: "6.5rem",
  zIndex: 99,
})

export const NavbarContainerStack = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  flexDirection: "row",
  padding: "0 3rem",
  marginTop: "1rem",
  [theme.breakpoints.down(1100)]: { padding: "0 2rem" },
}))
