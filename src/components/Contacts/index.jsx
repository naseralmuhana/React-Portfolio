import { useTheme } from "@mui/material"
import { Fade } from "react-awesome-reveal"
import { contactsDetailsInfo } from "../../data/contactsData"
import { socialsContactData } from "../../data/socialsData"
import ContactsForm from "./ContactsForm"
// prettier-ignore
import {
  Body, ContactsDetails, Container, Image, Section, SocialIcon, SocialIconsContainer,
} from "./mui"
import PersonalDetails from "./PersonalDetails"

const Contacts = () => {
  const theme = useTheme()
  const contactsInfo = contactsDetailsInfo.map(
    ({ component, href, icon, title }) => (
      <PersonalDetails
        key={title}
        component={component}
        href={href}
        icon={icon}
        title={title}
      />
    )
  )
  const socialsInfo = socialsContactData.map(({ href, icon, label }) => {
    const Icon = icon
    return (
      <SocialIcon key={label} href={href} target="_blank" rel="noreferrer">
        <Icon aria-label={label} />
      </SocialIcon>
    )
  })
  return (
    <Section id="contacts">
      {/* Container */}
      <Container>
        <h1>Contacts</h1>
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
