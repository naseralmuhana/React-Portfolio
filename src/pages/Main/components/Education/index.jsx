import { useTheme } from "@mui/material"
import { Fade } from "react-awesome-reveal"
import { eduImgBlack, eduImgWhite } from "../../../../assets"
import { educationData } from "../../../../data"
import Card from "../UI/Card"
// prettier-ignore
import { 
  Body, DescriptionContainer, ImageContainer, Section, Title 
} from "../UI/mui"

const Education = () => {
  const theme = useTheme()

  const Cards = educationData.map((education) => (
    <Card
      key={education.id}
      id={education.id}
      title={education.course}
      content={education.institution}
      startYear={education.startYear}
      endYear={education.endYear}
      imgDark={eduImgBlack}
      imgLight={eduImgWhite}
    />
  ))

  return (
    <Section id="education">
      {/* Body */}
      <Body>
        {/* Description */}
        <DescriptionContainer>
          <Title>Education</Title>
          {Cards}
        </DescriptionContainer>
        {/* Image */}

        <ImageContainer>
          <Fade direction="right">
            <img src={theme.eduimg} alt="" width="100%" />
          </Fade>
        </ImageContainer>
      </Body>
    </Section>
  )
}

export default Education
