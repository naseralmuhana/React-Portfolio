import { IconButton } from "@mui/material"
import { HashLink as Link } from "react-router-hash-link"
import CustomTooltip from "../CustomTooltip"

const CircularItem = ({
  id,
  label,
  icon,
  placement,
  to,
  onClick,
  className,
}) => {
  const Icon = icon

  let content = (
    <IconButton className={`iconButton ${className || ""}`} onClick={onClick}>
      <Icon className="icon" />
    </IconButton>
  )

  return (
    <CustomTooltip title={label} key={id} placement={placement}>
      {to ? (
        <Link to={to} smooth>
          {content}
        </Link>
      ) : (
        content
      )}
    </CustomTooltip>
  )
}

export default CircularItem
