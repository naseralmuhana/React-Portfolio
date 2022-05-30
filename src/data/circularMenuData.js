import { AiOutlineHome, AiOutlineExclamation } from "react-icons/ai"
import { TiContacts } from "react-icons/ti"
import { GiSkills, GiAchievement } from "react-icons/gi"
// prettier-ignore
import { MdWorkOutline, MdOutlineMiscellaneousServices, MdOutlineFormatQuote } from "react-icons/md"
import { IoSchoolOutline } from "react-icons/io5"
import { FaBloggerB } from "react-icons/fa"
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined"

export const circularMenuData = [
  {
    id: 1,
    label: "Contacts",
    icon: TiContacts,
    placement: "bottom",
    to: "#contacts",
  },
  {
    id: 2,
    label: "Blogs",
    icon: FaBloggerB,
    placement: "bottom",
    to: "#blogs",
  },
  {
    id: 3,
    label: "Testimonials",
    icon: MdOutlineFormatQuote,
    placement: "bottom-end",
    to: "#testimonials",
  },
  {
    id: 4,
    label: "Services",
    icon: MdOutlineMiscellaneousServices,
    placement: "bottom-end",
    to: "#services",
  },
  {
    id: 5,
    label: "Achievement",
    icon: GiAchievement,
    placement: "left-start",
    to: "#achievements",
  },
  {
    id: 6,
    label: "Projects",
    icon: AccountTreeOutlinedIcon,
    placement: "left-start",
    to: "#projects",
  },
  {
    id: 7,
    label: "Experience",
    icon: MdWorkOutline,
    placement: "left-start",
    to: "#experience",
  },
  {
    id: 8,
    label: "Skills",
    icon: GiSkills,
    placement: "left-start",
    to: "#skills",
  },
  {
    id: 9,
    label: "Eduction",
    icon: IoSchoolOutline,
    placement: "left-start",
    to: "#education",
  },
  {
    id: 10,
    label: "About Me",
    icon: AiOutlineExclamation,
    placement: "left",
    to: "#about",
  },
  {
    id: 11,
    label: "Home",
    icon: AiOutlineHome,
    placement: "left",
    to: "#landing",
  },
]
