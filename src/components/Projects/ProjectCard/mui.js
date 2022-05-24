import { styled } from "@mui/material"
import Box from "@mui/material/Box"

import "../../../App.css"

// Card Container
export const Card = styled("div")(({ theme }) => ({
  backgroundColor: theme.primary400,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  // width: "304px",
  // height: "360px",
  width: "100%",
  height: "100%",
  padding: "1.4rem 2rem",
  boxShadow: "4px 4px 8px rgba(36, 3, 3, 0.2)",
  borderRadius: "10px",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  "&:hover img": {
    opacity: 0,
  },
  "&:hover .content-actions > a:nth-of-type(2)": {
    transform: "translateX(-140px) scale(1.1) !important",
  },
  "&:hover .description": {
    transform: "translate(-2%, 40%)",
  },
  "&:hover .tags": {
    transform: "translateX(0)",
  },
}))

/**
 * Visible Card Content
 * content => [Project Name, Project Image, actionButtons]
 */

// Card Content
export const Content = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "100%",
})

// Card Content Title
export const ContentTitle = styled("h2")(({ theme }) => ({
  color: theme.tertiary,
  fontFamily: "var(--primaryFont)",
  fontWeight: 600,
  fontSize: "1.525rem",
  textAlign: "center",
  lineHeight: "110%",
}))

// Card Content Image
export const ContentImage = styled("img")({
  width: "100%",
  height: "60%",
  transition: "opacity 0.7s 0.3s",
})

// Card Content Actions[Buttons]
export const ContentActions = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
})

/**
 * Card Content Rounded IconButton
 * content => [Button, Icon]
 */

// Card Content Button
export const Btn = styled("a")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 40,
  height: 40,
  borderRadius: 50,
  border: `2px solid ${theme.tertiary}`,
  color: theme.tertiary,
  transition: "all 0.2s, transform 0.5s 0.3s",
  "&:hover": {
    backgroundColor: theme.secondary,
    color: theme.primary,
    transform: "scale(1.1)",
    border: `2px solid ${theme.secondary}`,
  },
}))

// Card Content Icon Button
export const BtnIcon = styled(Box)({
  fontSize: "1.1rem",
  transition: "all 0.2s",
})

/**
 * Card onHover
 * content => [Description, Tags]
 */

// Description
export const Description = styled("p")(({ theme }) => ({
  background: theme.secondary,
  color: theme.tertiary,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  left: "0",
  top: "0",
  width: "95%",
  height: "160px",
  padding: "15px",
  borderRadius: "0 20px 20px 0",
  lineHeight: "110%",
  fontFamily: "var(--primaryFont)",
  transform: "translate(-110%, 40%)",
  transition: "transform 0.9s",
}))

// Tags
export const Tags = styled("div")(({ theme }) => ({
  background: theme.secondary,
  color: theme.tertiary80,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "0.5rem",
  position: "absolute",
  right: "0",
  bottom: "20px",
  width: "140px",
  padding: "0.825rem",
  borderRadius: "10px 0 0 10px",

  lineHeight: "110%",
  fontFamily: "var(--primaryFont)",
  fontSize: "0.8rem",
  transform: "translateX(100%)",
  transition: "transform 0.5s 0.3s",
}))

// Tag Span (single tag)
export const TagSpan = styled("span")({
  fontFamily: "var(--primaryFont)",
  lineHeight: "100%",
  wordBreak: "break-word",
  fontWeight: "500",
})
