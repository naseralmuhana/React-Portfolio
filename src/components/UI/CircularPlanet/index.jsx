import { Planet } from "react-planet"
import CircularItem from "./CircularItem"

const CircularPlanet = ({
  children,
  onClick,
  onClose,
  open,
  icon,
  title,
  orbitRadius = 230,
  rotation = -14,
  toolTipPlacement = "left",
}) => {
  const className = open ? "main-btn open" : "main-btn"
  return (
    <Planet
      centerContent={
        <CircularItem
          label={title}
          icon={icon}
          placement={toolTipPlacement}
          className={className}
        />
      }
      hideOrbit
      autoClose
      bounce
      dragablePlanet
      orbitRadius={orbitRadius}
      rotation={rotation}
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
