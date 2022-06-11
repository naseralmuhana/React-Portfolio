//  prettier-ignore
import {SectionHeader, SectionTitle, ViewAllBtn } from "../../../../components"
import { useProjectsContext } from "../../../../contexts"
//  prettier-ignore
import {
  Body, CardsContainer, Section
} from "./mui"
import ProjectCard from "./ProjectCard"

const Projects = () => {
  const { projects } = useProjectsContext()
  if (projects.length === 0) return

  const cards = projects
    .filter((project) => project.isTemplate)
    .slice(0, 3)
    .map((project) => <ProjectCard key={project.id} project={project} />)

  const button = projects.length > 3 && (
    <ViewAllBtn title="PROJECTS" to="/projects" />
  )

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
        {button}
      </Body>
    </Section>
  )
}

export default Projects
