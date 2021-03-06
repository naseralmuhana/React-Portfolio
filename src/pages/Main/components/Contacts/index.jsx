import { useTheme } from "@mui/material"
import { Fade } from "react-awesome-reveal"
// prettier-ignore
import { CustomTooltip, SectionTitle } from "../../../../components"
// prettier-ignore
import { contactsDetailsInfo, socialsContactData } from "../../../../data"
import ContactsForm from "./ContactsForm"
// prettier-ignore
import {
  Body, ContactsDetails, Container, Image, Section, SocialIcon, SocialIconsContainer
} from "./mui"
import PersonalDetails from "./PersonalDetails"

const Contacts = () => {
  const theme = useTheme()
  const contactsInfo = contactsDetailsInfo.map((info) => (
    <PersonalDetails key={info.id} info={info} />
  ))
  const socialsInfo = socialsContactData.map(({ href, icon, label }) => {
    const Icon = icon
    return (
      <CustomTooltip title={label} key={label}>
        <SocialIcon href={href} target="_blank" rel="noreferrer">
          <Icon aria-label={label} />
        </SocialIcon>
      </CustomTooltip>
    )
  })
  return (
    <Section id="contacts">
      {/* Container */}
      <Container>
        {/* Title */}
        <SectionTitle>Contacts</SectionTitle>
        {/* Body */}
        <Body>
          {/* Form */}
          <ContactsForm />
          {/* Details */}
          <ContactsDetails>
            {/* Contact Info */}
            <Fade
              direction="left"
              cascade
              style={{ alignSelf: "flex-start", width: "100%" }}
            >
              {contactsInfo}
            </Fade>
            {/* Social Icons */}
            <SocialIconsContainer>
              <Fade direction="right" cascade duration={600}>
                {socialsInfo}
              </Fade>
            </SocialIconsContainer>
          </ContactsDetails>
        </Body>
      </Container>
      {/* Image */}
      <Image src={theme.contactsimg} alt="contacts" />
    </Section>
  )
}

export default Contacts
