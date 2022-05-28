import { HashLink as Link } from "react-router-hash-link"
import { useUIContext } from "../../contexts/UIContext"
import { headerData } from "../../data/headerData"
import { socialsData } from "../../data/socialsData"
import CustomTooltip from "../UI/CustomTooltip"
// prettier-ignore
import { Actions, Body, ContactBtn, Description, Image, LeftContainer, LeftContainerContent, Name, ResumeBtn, RightContainer, RightContainerContent, Section, SocialIcon, Title } from "./mui"

const Landing = () => {
  const { drawerOpen } = useUIContext()
  const socialIcons = socialsData.map(({ href, icon, label }, index) => (
    <CustomTooltip title={label}>
      <a href={href} target="_blank" rel="noreferrer" key={index}>
        <SocialIcon component={icon} aria-label={label} />
      </a>
    </CustomTooltip>
  ))
  return (
    <Section>
      {/* Body */}
      <Body>
        {/* Left Container */}
        <LeftContainer>
          <LeftContainerContent>{socialIcons}</LeftContainerContent>
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
