import Marquee from "react-fast-marquee"
import { skillsData } from "../../../../data"
import { skillsImage } from "../../../../utils"
// prettier-ignore
import { 
  Card, CardImage, CardTitle, Scroll, Body, Section, Title, Header 
} from "./mui"

const Skills = () => {
  return (
    <Section id="skills">
      {/* Header*/}
      <Header>
        <Title>Skills</Title>
      </Header>
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
              <Card className="skill--box" key={id}>
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
