import { IoHomeSharp } from "react-icons/io5"
import { HiDocumentText } from "react-icons/hi"
import { BsFillGearFill } from "react-icons/bs"
import { MdPhone } from "react-icons/md"
import { FaUser, FaFolderOpen } from "react-icons/fa"

export const navMenuData = [
  { label: "Home", to: "/", icon: IoHomeSharp },
  { label: "About", to: "/#about", icon: FaUser },
  { label: "Resume", to: "/#resume", icon: HiDocumentText },
  { label: "Services", to: "/#services", icon: BsFillGearFill },
  { label: "Blog", to: "/#blog", icon: FaFolderOpen },
  { label: "Contact", to: "/#contacts", icon: MdPhone },
]
