import { AiOutlineHome, AiOutlineExclamation } from "react-icons/ai"
import { TiContacts } from "react-icons/ti"
import { GiSkills, GiAchievement } from "react-icons/gi"
// prettier-ignore
import { 
  MdWorkOutline, MdOutlineMiscellaneousServices, MdOutlineFormatQuote 
} from "react-icons/md"
import { IoSchoolOutline } from "react-icons/io5"
import { FaBloggerB } from "react-icons/fa"
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined"

export const circularMenuData = [
  {
    id: 1,
    label: "Home",
    icon: AiOutlineHome,

    to: "landing",
  },
  {
    id: 2,
    label: "About Me",
    icon: AiOutlineExclamation,

    to: "about",
  },
  {
    id: 3,
    label: "Eduction",
    icon: IoSchoolOutline,

    to: "education",
  },
  {
    id: 4,
    label: "Skills",
    icon: GiSkills,

    to: "skills",
  },
  {
    id: 5,
    label: "Experience",
    icon: MdWorkOutline,

    to: "experience",
  },
  {
    id: 6,
    label: "Projects",
    icon: AccountTreeOutlinedIcon,

    to: "projects",
  },
  {
    id: 7,
    label: "Achievements",
    icon: GiAchievement,

    to: "achievements",
  },
  {
    id: 8,
    label: "Services",
    icon: MdOutlineMiscellaneousServices,

    to: "services",
  },
  {
    id: 9,
    label: "Testimonials",
    icon: MdOutlineFormatQuote,

    to: "testimonials",
  },
  {
    id: 10,
    label: "Blogs",
    icon: FaBloggerB,

    to: "blogs",
  },
  {
    id: 11,
    label: "Contacts",
    icon: TiContacts,

    to: "contacts",
  },
]
