import { Bounce, Fade } from "react-awesome-reveal"
import { HashLink as Link } from "react-router-hash-link"
import { useUIContext } from "../../contexts/UIContext"
import { headerData } from "../../data/headerData"
import { socialsData } from "../../data/socialsData"
import CustomTooltip from "../UI/CustomTooltip"
// prettier-ignore
import { Actions, Blob, Body, ContactBtn, Description, LeftContainer, LeftContainerContent, Name, ResumeBtn, RightContainer, RightContainerContent, Section, SocialIcon, Title } from "./mui"

const Landing = () => {
  const { drawerOpen } = useUIContext()
  const socialIcons = socialsData.map(({ href, icon, label }, index) => (
    <CustomTooltip title={label} key={index}>
      <a href={href} target="_blank" rel="noreferrer">
        <SocialIcon component={icon} aria-label={label} />
      </a>
    </CustomTooltip>
  ))
  return (
    <Section id="landing">
      {/* Body */}
      <Body>
        {/* Left Container */}
        <LeftContainer>
          <LeftContainerContent>
            <Fade direction="right" cascade duration={600}>
              {socialIcons}
            </Fade>
          </LeftContainerContent>
        </LeftContainer>
        {/* Rounded Animated Image */}
        <Blob src={headerData.image} draweropen={drawerOpen.toString()} />
        {/* Right Container */}
        <RightContainer>
          <RightContainerContent>
            <Title>{headerData.title}</Title>
            <Name>{headerData.name}</Name>
            <Description>{headerData.description}</Description>
            {/* Actions */}
            <Actions>
              <Bounce cascade delay={200}>
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
              </Bounce>
            </Actions>
          </RightContainerContent>
        </RightContainer>
      </Body>
    </Section>
  )
}

export default Landing
