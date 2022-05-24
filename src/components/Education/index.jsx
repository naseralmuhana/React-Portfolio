import { useTheme } from "@mui/material"
import { educationData } from "../../data/eductionData"
import Card from "../UI/Card"
// prettier-ignore
import {
  Section, Body, DescriptionContainer, ImageContainer, Title
} from "../UI/mui"
import eduImgWhite from "../../assets/svg/education/eduImgWhite.svg"
import eduImgBlack from "../../assets/svg/education/eduImgBlack.svg"
import { Fade } from "react-awesome-reveal"

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
