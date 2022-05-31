import { useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/system"
import { Link } from "react-router-dom"
import CircularMenu from "../CircularMenu"
import LogoAnimation from "./LogoAnimation"
import LogoSmAnimation from "./LogoSmAnimation"
import { NavbarContainerStack, NavbarStack } from "./mui"

const Navbar = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up(800))

  return (
    <NavbarStack>
      <NavbarContainerStack>
        {/* Logo */}
        <Link to="/">
          {matches ? (
            <LogoAnimation stroke={theme.secondary} />
          ) : (
            <LogoSmAnimation stroke={theme.secondary} />
          )}
        </Link>
        {/* Circular menu */}
        <CircularMenu />
      </NavbarContainerStack>
    </NavbarStack>
  )
}

export default Navbar
