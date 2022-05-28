import { FiPhone, FiAtSign } from "react-icons/fi"
import { HiOutlineLocationMarker } from "react-icons/hi"

export const contactsData = {
  email: "janedoe.test@gmail.com",
  phone: "+915588776600",
  address: "Menlo Park, California, United States - 673822 ",

  sheetAPI: "",
}

export const contactsDetailsInfo = [
  {
    id: "Email",
    title: "janedoe.test@gmail.com",
    component: "a",
    href: `mailto:janedoe.test@gmail.com`,
    icon: <FiAtSign />,
  },
  {
    id: "Phone",

    title: "+915588776600",
    component: "a",
    href: `tel:+915588776600`,
    icon: <FiPhone />,
  },
  {
    id: "Address",
    title: "Menlo Park, California, United States - 673822",
    component: "div",
    icon: <HiOutlineLocationMarker />,
  },
]
