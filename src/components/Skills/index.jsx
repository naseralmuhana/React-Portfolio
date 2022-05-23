import Marquee from "react-fast-marquee"
import { skillsData } from "../../data/skillsData"
import { skillsImage } from "../../utils/skillsImage"
// prettier-ignore
import { 
  Card, CardImage, CardTitle, Scroll, ScrollContainer, Section, Title, TitleContainer 
} from "./mui"

const Skills = () => {
  return (
    <Section id="skills">
      {/* Title */}
      <TitleContainer>
        <Title>Skills</Title>
      </TitleContainer>
      {/* Scroll */}
      <ScrollContainer>
        <Scroll>
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            style={{ padding: "3rem 0" }}
          >
            {skillsData.map((skill, id) => (
              <Card className="skill--box" key={id}>
                <CardImage src={skillsImage(skill)} alt={skill} />
                <CardTitle>{skill}</CardTitle>
              </Card>
            ))}
          </Marquee>
        </Scroll>
      </ScrollContainer>
    </Section>
  )
}

export default Skills
