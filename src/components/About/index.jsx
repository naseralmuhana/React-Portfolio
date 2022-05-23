import { useTheme } from "@mui/material"
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
          <AboutTitle>{aboutData.title}</AboutTitle>
          <AboutDescription>
            {aboutData.description1}
            <br />
            <br />
            {aboutData.description2}
          </AboutDescription>
        </AboutDescriptionContainer>
        {/* Image */}
        <AboutImageContainer>
          <AboutImage
            src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}
            alt=""
          />
        </AboutImageContainer>
      </AboutBody>
    </AboutSection>
  )
}

export default About
