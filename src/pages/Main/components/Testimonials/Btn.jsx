import { useTheme } from "@mui/material"
import Box from "@mui/material/Box"
import { CustomTooltip } from "../../../../components"
import { Button } from "./mui"

const Btn = ({ onClick, icon, iconAria, iconStyle, BtnStyle }) => {
  const theme = useTheme()
  return (
    <CustomTooltip title={iconAria}>
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
    </CustomTooltip>
  )
}

export default Btn
