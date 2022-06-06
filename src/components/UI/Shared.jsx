import { styled } from "@mui/system"
import "../../App.css"

/**
 * Header
 *  Content => [header, title]
 */

// Container if needed for centering the title
export const SectionHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  margin: "1rem",
}))

// Section Title default Style
export const SectionTitle = styled("h1")(({ theme }) => ({
  color: theme.primary,
  fontFamily: "var(--primaryFont)",
  fontSize: "3.5rem",
  marginBottom: "2.5rem",
  [theme.breakpoints.between(992, 1380)]: {
    fontSize: "3.3rem",
    marginBottom: "1.875rem",
  },
  [theme.breakpoints.down(992)]: {
    fontSize: "3rem",
    marginBottom: "1.25rem",
  },
  [theme.breakpoints.down(800)]: {
    fontSize: "2.75rem",
    alignSelf: "center",
  },
  [theme.breakpoints.down(600)]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.down(320)]: {
    fontSize: "2rem",
  },
}))
