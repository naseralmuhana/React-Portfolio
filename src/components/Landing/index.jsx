import { useUIContext } from "../../contexts/UIContext"
import { HashLink as Link } from "react-router-hash-link"
import { headerData } from "../../data/headerData"
import { socialsData } from "../../data/socialsData"
// prettier-ignore
import { 
  Section, Body, LeftContainer, RightContainer, Image, LeftContainerContent, SocialIcon, RightContainerContent, Title, Name, Description, Actions, ResumeBtn, ContactBtn
} from "./mui"

const Landing = () => {
  const { drawerOpen } = useUIContext()
  return (
    <Section>
      {/* Body */}
      <Body>
        {/* Left Container */}
        <LeftContainer>
          <LeftContainerContent>
            {socialsData.map(({ href, icon, label }, index) => (
              <a href={href} target="_blank" rel="noreferrer" key={index}>
                <SocialIcon component={icon} aria-label={label} />
              </a>
            ))}
          </LeftContainerContent>
        </LeftContainer>
        {/* Rounded Image */}
        <Image
          src={headerData.image}
          alt=""
          draweropen={drawerOpen.toString()}
        />
        {/* Right Container */}
        <RightContainer>
          <RightContainerContent>
            <Title>{headerData.title}</Title>
            <Name>{headerData.name}</Name>
            <Description>{headerData.description}</Description>
            {/* Actions */}
            <Actions>
              {headerData.resumePdf && (
                <a
                  href={headerData.resumePdf}
                  download="resume"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ResumeBtn>Download CV</ResumeBtn>
                </a>
              )}
              <Link to="#contacts" smooth>
                <ContactBtn>Contact</ContactBtn>
              </Link>
            </Actions>
          </RightContainerContent>
        </RightContainer>
      </Body>
    </Section>
  )
}

export default Landing
