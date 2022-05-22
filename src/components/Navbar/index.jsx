import { useState } from "react"
import { useUIContext } from "../../contexts/UIContext"
import { headerData } from "../../data/headerData"
// prettier-ignore
import { CloseBtnIcon, CustomDrawer, CustomDrawerIcon, CustomDrawerItem, CustomDrawerLink, NavbarContainerStack, NavbarLogo, NavbarMenuIcon, NavbarStack, NavLinkContainer } from "./mui"
import Fade from "react-reveal/Fade"
import { NavLink } from "react-router-dom"
import { Drawer, Box } from "@mui/material"
import { navMenuData } from "../../data/navMenuData"
import SwipeableDrawer from "@mui/material/SwipeableDrawer"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MailIcon from "@mui/icons-material/Mail"

const Navbar = () => {
  // const { setHandleDrawer } = useUIContext()
  // const [open, setOpen] = useState(false)

  // const handleDrawerOpen = () => {
  //   setOpen(true)
  //   setHandleDrawer()
  // }

  // const handleDrawerClose = () => {
  //   setOpen(false)
  //   setHandleDrawer()
  // }

  // const onCloseHandler = (event, reason) => {
  //   if (reason !== "backdropClick") {
  //     handleDrawerClose()
  //   } else if (reason !== "escapeKeyDown") {
  //     handleDrawerClose()
  //   }
  // }

  // const list = (
  //   <Box
  //     role="presentation"
  //     onClick={handleDrawerClose}
  //     onKeyDown={handleDrawerClose}
  //   >
  //     <List>
  //       {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // )

  return (
    <NavbarStack>
      <NavbarContainerStack>
        <NavbarLogo>{headerData.name}</NavbarLogo>
        {/* <NavbarMenuIcon onClick={handleDrawerOpen} aria-label="Menu" /> */}
      </NavbarContainerStack>
      {/* <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={onCloseHandler}
        // onOpen={handleDrawerOpen}
      >
        {list}
      </SwipeableDrawer> */}
    </NavbarStack>
  )
}

export default Navbar

//  <Drawer
//         sx={{
//           padding: "0em 1.8em",
//           width: "14em",
//           backgroundColor: "red",
//           overflow: "hidden",
//           borderTopRightRadius: "40px",
//           borderBottomRightRadius: "40px",
//           zIndex: 1200,
//         }}
//         className="drawer"
//         // variant="temporary"
//         onClose={onCloseHandler}
//         anchor="left"
//         open={open}
//         disableScrollLock={true}
//       >
//         <CloseBtnIcon
//           onClick={handleDrawerClose}
//           onKeyDown={(e) => {
//             if (e.key === " " || e.key === "Enter") {
//               e.preventDefault()
//               handleDrawerClose()
//             }
//           }}
//           role="button"
//           tabIndex="0"
//           aria-label="Close"
//         />

//         <br />

//          <div onClick={handleDrawerClose}>
//           <NavLinkContainer>
//             <Fade left>
//               <NavLink to="/" spy="true" duration={2000}>
//                 <CustomDrawerItem>
//                   <CustomDrawerIcon />
//                   <CustomDrawerLink>Home</CustomDrawerLink>
//                 </CustomDrawerItem>
//               </NavLink>
//             </Fade>
//           </NavLinkContainer>
//         </div>
//       </Drawer>
