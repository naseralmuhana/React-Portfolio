import { styled } from "@mui/material"
import "../../App.css"

// Footer Section
export const Section = styled("section")(({ theme }) => ({
  backgroundColor: theme.secondary,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "60px",
  width: "100%",
  fontFamily: "var(--primaryFont)",
  "&  p": {
    color: theme.tertiary,
    fontWeight: "500",
    fontSize: "18px",
    "& span": {
      color: theme.primary,
      margin: "0 0.5rem -1rem 0.5rem",
      fontSize: "24px",
    },
  },
}))
