import { useTheme } from "@mui/material"
import { educationData } from "../../data/eductionData"
import Card from "./Card"
// prettier-ignore
import { Section, Body, Description, Title, ImageContainer } from "./mui"

const Education = () => {
  const theme = useTheme()

  const Cards = educationData.map((education) => (
    <Card key={education.id} education={education} />
  ))

  return (
    <Section id="education">
      {/* Body */}
      <Body>
        {/* Description */}
        <Description>
          <Title>Education</Title>
          {Cards}
        </Description>
        {/* Image */}
        <ImageContainer>
          <img src={theme.eduimg} alt="" width="100%" />
        </ImageContainer>
      </Body>
    </Section>
  )
}

export default Education
