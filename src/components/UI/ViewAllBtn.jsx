import { styled } from "@mui/material/styles"
import { Link } from "react-router-dom"
import CustomTooltip from "../CustomTooltip"
import { HiArrowRight } from "react-icons/hi"

const ViewAllBtn = ({ to, title }) => {
  return (
    <Container>
      <Link to={to}>
        <CustomTooltip title={title}>
          <Btn>
            View All
            <Icon />
          </Btn>
        </CustomTooltip>
      </Link>
    </Container>
  )
}

export default ViewAllBtn

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  width: "100%",
  marginTop: "2rem",
  padding: "2rem",
  [theme.breakpoints.down(800)]: {
    justifyContent: "center",
  },
}))

const Btn = styled("button")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  outline: "none",
  border: "none",
  width: "150px",
  height: "48px",
  fontFamily: "var(--primaryFont)",
  fontSize: "1.05rem",
  fontWeight: "500",
  cursor: "pointer",
  borderRadius: "45px",
  textTransform: "inherit",
  paddingLeft: "1.5rem",
  color: theme.tertiary,
  transition: "all 300ms ease-in-out",
  backgroundColor: theme.primary30,
  "&:hover": {
    transform: "scale(1.05)",
    color: theme.secondary,
    backgroundColor: theme.primary50,
  },
}))
// backgroundColor: theme.primary80,
//  backgroundColor: theme.primary400,

const Icon = styled(HiArrowRight)(({ theme }) => ({
  color: theme.tertiary,
  backgroundColor: theme.secondary70,
  width: "40px",
  height: "40px",
  padding: "0.5rem",
  fontSize: "1.05rem",
  borderRadius: "50%",
  cursor: "pointer",
  transition: "background-color 0.2s",
  "&:hover": {
    color: theme.tertiary,
    backgroundColor: theme.secondary,
  },
}))
