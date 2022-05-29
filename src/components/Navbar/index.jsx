// import { useState } from "react"
// import { useUIContext } from "../../contexts/UIContext"
import { headerData } from "../../data/headerData"
import CircularMenu from "../CircularMenu"

// prettier-ignore
import {  NavbarContainerStack, NavbarLogo,  NavbarStack,  } from "./mui"

// Import the circular menu

const Navbar = () => {
  return (
    <NavbarStack>
      <NavbarContainerStack>
        <NavbarLogo>{headerData.name}</NavbarLogo>
        {/* Circular menu */}
        <CircularMenu />
        {/* <NavbarMenuIcon onClick={handleDrawerOpen} aria-label="Menu" /> */}
      </NavbarContainerStack>
    </NavbarStack>
  )
}

export default Navbar
