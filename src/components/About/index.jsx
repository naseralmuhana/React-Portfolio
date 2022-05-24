import { useTheme } from "@mui/material"
import { Fade, Slide } from "react-awesome-reveal"
import { aboutData } from "../../data/aboutData"
// prettier-ignore
import { 
    AboutBody, AboutDescription, AboutDescriptionContainer, AboutImage, AboutImageContainer, AboutSection, AboutTitle, Circle, Line, LineContainer 
} from "./mui"

const About = () => {
  const theme = useTheme()
  return (
    <AboutSection id="about">
      {/* Top Line */}
      <LineContainer>
        <Circle />
        <Circle />
        <Line />
      </LineContainer>
      {/* Body */}
      <AboutBody>
        {/* Description */}

        <AboutDescriptionContainer>
          <Slide direction="left">
            <AboutTitle>{aboutData.title}</AboutTitle>
            <AboutDescription>
              {aboutData.description1}
              <br />
              <br />
              {aboutData.description2}
            </AboutDescription>
          </Slide>
        </AboutDescriptionContainer>

        {/* Image */}
        <Fade direction="right">
          <AboutImageContainer>
            <AboutImage
              src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}
              alt=""
            />
          </AboutImageContainer>
        </Fade>
      </AboutBody>
    </AboutSection>
  )
}

export default About
