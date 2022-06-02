import { Bounce, Fade } from "react-awesome-reveal"
import { Link } from "react-scroll"
import { headerData, socialsData } from "../../../../data"
import { CustomTooltip } from "../../../../components"

// prettier-ignore
import {
  Actions, Blob, Body, ContactBtn, Description, LeftContainer, LeftContainerContent, Name, ResumeBtn, RightContainer, RightContainerContent, Section, SocialIcon, Title
} from "./mui"

const Landing = () => {
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
        <Blob src={headerData.image} />

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

                <Link to="contacts" spy smooth isDynamic duration={2000}>
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
