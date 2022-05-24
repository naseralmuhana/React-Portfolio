import { useTheme } from "@mui/material"
import { experienceData } from "../../data/experienceData"
// prettier-ignore
import { 
    Section, Body, DescriptionContainer, ImageContainer, Title 
} from "../UI/mui"
import expImgWhite from "../../assets/svg/experience/expImgWhite.svg"
import expImgBlack from "../../assets/svg/experience/expImgBlack.svg"
import Card from "../UI/Card"
import { Fade } from "react-awesome-reveal"

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
          <Title>Experience</Title>
          {Cards}
        </DescriptionContainer>
      </Body>
    </Section>
  )
}

export default Experience
