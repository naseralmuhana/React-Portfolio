import { useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/system"
import { Link } from "react-router-dom"
import CircularMenu from "./CircularMenu"
import { LogoAnimation, LogoSmAnimation } from "./Logo"
import { NavbarContainerStack, NavbarStack } from "./mui"

const Header = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up(800))

  return (
    <NavbarStack component="header">
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

export default Header
