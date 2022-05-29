import { Planet } from "react-planet"
import CustomTooltip from "../UI/CustomTooltip"
import IconButton from "@mui/material/IconButton"
import { AiOutlinePlus } from "react-icons/ai"

const CircularPlanet = ({ children, onClick, onClose, open }) => {
  const className = open ? "iconButton main-btn open" : "iconButton main-btn"
  return (
    <Planet
      centerContent={
        <CustomTooltip title="Menu">
          <IconButton className={className}>
            <AiOutlinePlus className="icon" />
          </IconButton>
        </CustomTooltip>
      }
      hideOrbit
      autoClose
      orbitRadius={140}
      bounce
      rotation={-9}
      dragablePlanet
      dragRadiusPlanet={100}
      mass={4}
      tension={600}
      friction={40}
      onClick={onClick}
      onClose={onClose}
      open={open}
    >
      {children}
    </Planet>
  )
}

export default CircularPlanet
