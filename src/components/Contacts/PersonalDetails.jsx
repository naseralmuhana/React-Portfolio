import { DetailsIconContainer, PersonalDetailsContainer } from "./mui"

const PersonalDetails = ({ href, title, icon, component }) => {
  return (
    <PersonalDetailsContainer component={component} href={href}>
      <DetailsIconContainer>{icon}</DetailsIconContainer>
      <p>{title}</p>
    </PersonalDetailsContainer>
  )
}

export default PersonalDetails
