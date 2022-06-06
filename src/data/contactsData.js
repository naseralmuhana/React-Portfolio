import { FiPhone, FiAtSign } from "react-icons/fi"
import { HiOutlineLocationMarker } from "react-icons/hi"

// export const contactsData = {
//   email: "naseralmuhana0@gmail.com",
//   phone: "+962787828021",
//   address: "Amman,Jordan",
//   sheetAPI: "",
// }

export const contactsDetailsInfo = [
  {
    id: "Email",
    title: "naseralmuhana0@gmail.com",
    component: "a",
    href: `mailto:naseralmuhana0@gmail.com`,
    icon: <FiAtSign />,
  },
  {
    id: "Phone",
    title: "+962787828021",
    component: "a",
    href: `tel:+962787828021`,
    icon: <FiPhone />,
  },
  {
    id: "Address",
    title: "Amman, Jordan",
    component: "div",
    icon: <HiOutlineLocationMarker />,
  },
]
