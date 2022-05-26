import { useTheme } from "@mui/material"
import React from "react"
import Box from "@mui/material/Box"
import { Button } from "./mui"

const Btn = ({ onClick, icon, iconAria, iconStyle, BtnStyle }) => {
  const theme = useTheme()
  return (
    <Button
      onClick={onClick}
      style={{
        ...BtnStyle,
      }}
    >
      {/* Icon */}
      <Box
        style={{ color: theme.primary, ...iconStyle }}
        component={icon}
        aria-label={`${iconAria} testimonial`}
      />
    </Button>
  )
}

export default Btn
