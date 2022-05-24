import { useTheme } from "@mui/material"
import { educationData } from "../../data/eductionData"
import Card from "../UI/Card"
// prettier-ignore
import {
  Section, SectionBody, SectionDescriptionContainer, SectionImageContainer, SectionTitle
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
      <SectionBody>
        {/* Description */}
        <SectionDescriptionContainer>
          <SectionTitle>Education</SectionTitle>
          {Cards}
        </SectionDescriptionContainer>
        {/* Image */}
        <Fade direction="right">
          <SectionImageContainer>
            <img src={theme.eduimg} alt="" width="100%" />
          </SectionImageContainer>
        </Fade>
      </SectionBody>
    </Section>
  )
}

export default Education
