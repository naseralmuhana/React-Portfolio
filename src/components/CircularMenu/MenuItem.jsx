import { styled } from "@mui/system"
import IconButton from "@mui/material/IconButton"
import { HashLink as Link } from "react-router-hash-link"
import CustomTooltip from "../UI/CustomTooltip"

const MenuItem = ({ item, isOpen, onClose }) => {
  const { id, icon, label, to } = item
  const ItemIcon = icon

  return (
    <Link
      key={id}
      to={to}
      // smooth
      scroll={(el) =>
        el.scrollIntoView({ behavior: "smooth", block: "center" })
      }
      style={{ position: "absolute" }}
    >
      <CustomTooltip title={label} placement="left">
        <Item
          index={id}
          // onClick={onClose}
          className={isOpen ? "open" : undefined}
        >
          <ItemIcon />
        </Item>
      </CustomTooltip>
    </Link>
  )
}

export default MenuItem

const Item = styled(IconButton)(({ theme, index }) => ({
  zIndex: "1500",
  backgroundColor: theme.tertiary,
  color: theme.secondary,
  transition: `transform 0.5s calc(0.05s * ${index}),
        backgroundColor 0.2s linear,
        color 0.2s linear`,
  transitionDelay: ``,
  "&.open": {
    transform: `translateY(calc(45 * ${index}px))`,
  },
  "&:hover": {
    backgroundColor: theme.primary,
    color: theme.tertiary,
  },
}))
