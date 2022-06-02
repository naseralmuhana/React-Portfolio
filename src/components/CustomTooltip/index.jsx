import { Zoom } from "@mui/material"
import { styled } from "@mui/material/styles"
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip"
import "../../App.css"

const CustomTooltip = ({ title, children, placement = "top" }) => {
  return (
    <CToolTip title={title} placement={placement}>
      {children}
    </CToolTip>
  )
}

export default CustomTooltip

// Custom Tool Tip
const CToolTip = styled(({ className, ...props }) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
    TransitionComponent={Zoom}
    // leaveDelay={60000}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.secondary,
    color: theme.tertiary,
    fontFamily: "var(--primaryFont)",
    boxShadow: theme.shadows[1],
    [theme.breakpoints.down(800)]: {
      fontSize: "0.775rem",
    },
  },
}))
