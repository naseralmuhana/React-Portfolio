import { Link } from "react-router-dom"
import { projectsData } from "../../../../data"
import { CustomTooltip } from "../../../../components"

//  prettier-ignore
import {
  Body, CardsContainer, Section, Title, Header, ViewAllBtn, ViewAllContainer, ViewAllIcon
} from "./mui"
import ProjectCard from "./ProjectCard"

const Projects = () => {
  if (projectsData.length === 0) return

  const cards = projectsData
    .slice(0, 3)
    .map((project) => <ProjectCard key={project.id} project={project} />)

  return (
    <Section id="projects">
      {/* Header */}
      <Header>
        {/* Title */}
        <Title>Projects</Title>
      </Header>
      {/* Body */}
      <Body>
        {/* Cards */}
        <CardsContainer>{cards}</CardsContainer>
        {/* ViewAll Button*/}
        {projectsData.length > 3 && (
          <ViewAllContainer>
            <Link to="/projects">
              <CustomTooltip title="PROJECTS">
                <ViewAllBtn>
                  View All
                  <ViewAllIcon />
                </ViewAllBtn>
              </CustomTooltip>
            </Link>
          </ViewAllContainer>
        )}
      </Body>
    </Section>
  )
}

export default Projects
