import { CustomTooltip } from "../../../../components"
import { DetailsIconContainer, PersonalDetailsContainer } from "./mui"

const PersonalDetails = ({ info }) => {
  const { href, title, icon, component, id } = info
  return (
    <PersonalDetailsContainer component={component} href={href}>
      <CustomTooltip title={id}>
        <DetailsIconContainer>{icon}</DetailsIconContainer>
      </CustomTooltip>
      <p>{title}</p>
    </PersonalDetailsContainer>
  )
}

export default PersonalDetails
