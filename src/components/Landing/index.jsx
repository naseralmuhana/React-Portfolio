import { useUIContext } from "../../contexts/UIContext"
import { NavHashLink as NavLink } from "react-router-hash-link"
import { headerData } from "../../data/headerData"
import { socialsData } from "../../data/socialsData"
// prettier-ignore
import { 
  LandingSection, LandingContainer, LandingContainerLeft, LandingContainerRight, LandingImage, LCLContent, SocialIcon, LCRContent, LCRTitle, LCTName, LCTDescription, LCTActionsContainer, ResumeButton, ContactButton
} from "./mui"

const Landing = () => {
  const { drawerOpen } = useUIContext()
  return (
    <LandingSection>
      <LandingContainer>
        {/* Left Container */}
        <LandingContainerLeft>
          <LCLContent>
            {socialsData.map(({ href, icon, label }, index) => (
              <a href={href} target="_blank" rel="noreferrer" key={index}>
                <SocialIcon component={icon} aria-label={label} />
              </a>
            ))}
          </LCLContent>
        </LandingContainerLeft>
        {/* Rounded Image */}
        <LandingImage
          src={headerData.image}
          alt=""
          draweropen={drawerOpen.toString()}
        />
        {/* Right Container */}
        <LandingContainerRight>
          <LCRContent>
            <LCRTitle>{headerData.title}</LCRTitle>
            <LCTName>{headerData.name}</LCTName>
            <LCTDescription>{headerData.description}</LCTDescription>
            {/* Actions */}
            <LCTActionsContainer>
              {headerData.resumePdf && (
                <a
                  href={headerData.resumePdf}
                  download="resume"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ResumeButton>Download CV</ResumeButton>
                </a>
              )}
              <NavLink to="/#contacts" smooth spy="true" duration={2000}>
                <ContactButton>Contact</ContactButton>
              </NavLink>
            </LCTActionsContainer>
          </LCRContent>
        </LandingContainerRight>
      </LandingContainer>
    </LandingSection>
  )
}

export default Landing
