// import { useState } from "react"
// import { useUIContext } from "../../contexts/UIContext"

import { useTheme } from "@mui/system"
import CircularMenu from "../CircularMenu"

// prettier-ignore
import {  NavbarContainerStack,  NavbarStack,  } from "./mui"

const Navbar = () => {
  const theme = useTheme()
  return (
    <NavbarStack>
      <NavbarContainerStack>
        {/* Logo */}

        <div style={{}}>
          <img src={theme.logonr} alt="" />
        </div>
        {/* Circular menu */}
        <CircularMenu />
      </NavbarContainerStack>
    </NavbarStack>
  )
}

export default Navbar
