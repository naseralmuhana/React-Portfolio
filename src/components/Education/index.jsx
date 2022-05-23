import { useTheme } from "@mui/material"
import { educationData } from "../../data/eductionData"
import Card from "./Card"
// prettier-ignore
import { Section, Body, Description, Title, ImageContainer } from "./mui"

const Education = () => {
  const theme = useTheme()
  return (
    <Section id="education">
      <Body>
        <Description>
          <Title>Education</Title>
          {educationData.map((education) => (
            <Card key={education.id} education={education} />
          ))}
        </Description>
        <ImageContainer>
          <img src={theme.eduimg} alt="" width="100%" />
        </ImageContainer>
      </Body>
    </Section>
  )
}

export default Education
