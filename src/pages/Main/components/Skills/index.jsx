import Marquee from "react-fast-marquee"
// prettier-ignore
import { SectionHeader, SectionTitle } from "../../../../components"
import { skillsData } from "../../../../data"
import { skillsImage } from "../../../../utils"
// prettier-ignore
import { Body, Card, CardImage, CardTitle, Scroll, Section } from "./mui"

const Skills = () => {
  return (
    <Section id="skills">
      {/* Header*/}
      <SectionHeader sx={{ m: "0.7rem" }}>
        {/* Title */}
        <SectionTitle sx={{ mb: { xs: 0 } }}>Skills</SectionTitle>
      </SectionHeader>
      {/* Body */}
      <Body>
        {/* Scroll */}
        <Scroll>
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            style={{ padding: "3rem 0" }}
          >
            {skillsData.map((skill, id) => (
              <Card key={id}>
                <CardImage src={skillsImage(skill)} alt={skill} />
                <CardTitle>{skill}</CardTitle>
              </Card>
            ))}
          </Marquee>
        </Scroll>
      </Body>
    </Section>
  )
}

export default Skills
