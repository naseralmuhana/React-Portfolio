import { useEffect, useState } from "react"
import { PageTemplate } from "../../components"
import ProjectCard from "../Main/components/Projects/ProjectCard"
import { useProjectsContext } from "../../contexts"

const settings = {
  tabTitle: "Projects",
  title: "Projects",
  placeholder: "Search project...",
}

const Projects = () => {
  const { projects } = useProjectsContext()
  const [filteredProjects, setFilteredProjects] = useState([])

  useEffect(() => {
    setFilteredProjects(projects)
  }, [projects])

  const handleSearch = (search) => {
    setFilteredProjects(
      projects.filter((project) => {
        const content = project.projectName + project.projectDesc + project.tags
        const result = content.toLowerCase().includes(search.toLowerCase())
        return result
      })
    )
  }

  return (
    <PageTemplate {...settings} onSearch={handleSearch}>
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </PageTemplate>
  )
}

export default Projects
