import { IconButton } from "@mui/material"
import { HashLink as Link } from "react-router-hash-link"
import CustomTooltip from "../UI/CustomTooltip"

const CircularItem = ({ item, onClick }) => {
  const { id, label, icon, placement, to } = item
  return (
    <CustomTooltip title={label} key={id} placement={placement}>
      <Link to={to} smooth>
        <IconButton className="iconButton" onClick={onClick}>
          {icon}
        </IconButton>
      </Link>
    </CustomTooltip>
  )
}

export default CircularItem
