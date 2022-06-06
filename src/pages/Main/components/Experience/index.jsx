import { useTheme } from "@mui/material"
import { Fade } from "react-awesome-reveal"
import { expImgBlack, expImgWhite } from "../../../../assets"
import { SectionTitle } from "../../../../components"
import { experienceData } from "../../../../data"
import Card from "../UI/Card"
// prettier-ignore
import { 
  Body, DescriptionContainer, ImageContainer, Section
} from "../UI/mui"

/**
 * used in[Experience Section, Education Section]
 * @returns Card
 */

const Experience = () => {
  const theme = useTheme()
  const Cards = experienceData.map((experience) => (
    <Card
      fadeStyle={{
        display: "flex",
        justifyContent: "flex-end",
      }}
      imgStyle={{
        width: "36px",
      }}
      key={experience.id}
      id={experience.id}
      title={experience.jobtitle}
      content={experience.company}
      startYear={experience.startYear}
      endYear={experience.endYear}
      imgDark={expImgBlack}
      imgLight={expImgWhite}
    />
  ))

  return (
    <Section id="experience">
      {/* Body */}
      <Body>
        {/* Image */}
        <ImageContainer sx={{ ml: "7%" }}>
          <Fade direction="left">
            <img src={theme.expimg} alt="" width="100%" />
          </Fade>
        </ImageContainer>
        {/* Description */}
        <DescriptionContainer
          sx={{ alignItems: "flex-end", ml: 0, mr: "2rem" }}
        >
          {/* <Title>Experience</Title> */}
          <SectionTitle>Experience</SectionTitle>
          {Cards}
        </DescriptionContainer>
      </Body>
    </Section>
  )
}

export default Experience
