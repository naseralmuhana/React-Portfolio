import { useTheme } from "@mui/material"
import { Fade } from "react-awesome-reveal"
import { SectionTitle } from "../../../../components"
import { aboutData } from "../../../../data"
// prettier-ignore
import { 
    Body, Description, DescriptionContainer, Image, ImageContainer, Section, Circle, Line, LineContainer 
} from "./mui"

const About = () => {
  const theme = useTheme()
  return (
    <Section id="about">
      {/* Top Line */}
      <LineContainer>
        <Circle />
        <Circle />
        <Line />
      </LineContainer>
      {/* Body */}
      <Body>
        {/* Description & Title Container */}
        <DescriptionContainer>
          {/* title */}
          <SectionTitle>{aboutData.title}</SectionTitle>
          {/* Description */}
          <Description>
            {aboutData.description1}
            <br />
            <br />
            {aboutData.description2}
          </Description>
        </DescriptionContainer>
        {/* Image */}
        <ImageContainer>
          <Fade direction="left">
            <Image
              src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}
              alt=""
            />
          </Fade>
        </ImageContainer>
      </Body>
    </Section>
  )
}

export default About
