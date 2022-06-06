import { Link } from "react-router-dom"
//  prettier-ignore
import { CustomTooltip, SectionHeader, SectionTitle } from "../../../../components"
import { useProjectsContext } from "../../../../contexts"
//  prettier-ignore
import {
  Body, CardsContainer, Section, ViewAllBtn, ViewAllContainer, ViewAllIcon
} from "./mui"
import ProjectCard from "./ProjectCard"

const Projects = () => {
  const { projects } = useProjectsContext()
  if (projects.length === 0) return

  const cards = projects
    .filter((project) => project.isTemplate)
    .slice(0, 3)
    .map((project) => <ProjectCard key={project.id} project={project} />)

  return (
    <Section id="projects">
      {/* Header */}
      <SectionHeader>
        {/* Title */}
        <SectionTitle>Projects</SectionTitle>
      </SectionHeader>
      {/* Body */}
      <Body>
        {/* Cards */}
        <CardsContainer>{cards}</CardsContainer>
        {/* ViewAll Button*/}
        {projects.length > 3 && (
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
