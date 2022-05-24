import { useTheme } from "@mui/material"
import { experienceData } from "../../data/experienceData"
// prettier-ignore
import { 
    Section, SectionBody, SectionDescriptionContainer, SectionImageContainer, SectionTitle 
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
      <SectionBody>
        {/* Image */}
        <Fade direction="left">
          <SectionImageContainer sx={{ ml: "7%" }}>
            <img src={theme.expimg} alt="" width="100%" />
          </SectionImageContainer>
        </Fade>
        {/* Description */}
        <SectionDescriptionContainer
          sx={{ alignItems: "flex-end", ml: 0, mr: "2rem" }}
        >
          <SectionTitle>Experience</SectionTitle>
          {Cards}
        </SectionDescriptionContainer>
      </SectionBody>
    </Section>
  )
}

export default Experience
