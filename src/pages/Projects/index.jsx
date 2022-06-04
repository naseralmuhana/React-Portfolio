import { useEffect, useState } from "react"
import { PageTemplate } from "../../components"
import { Rings } from "react-loader-spinner"
import ProjectCard from "../Main/components/Projects/ProjectCard"
import { useProjectsContext } from "../../contexts"
import { useTheme } from "@mui/material"

const settings = {
  tabTitle: "Projects",
  title: "Projects",
  placeholder: "Search project...",
}

const Projects = () => {
  const { projects } = useProjectsContext()
  const theme = useTheme()
  const [isLoading, setIsLoading] = useState(false)
  const [filteredProjects, setFilteredProjects] = useState([])

  useEffect(() => {
    setIsLoading(true)
    setFilteredProjects(projects)
    setIsLoading(false)
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
      {isLoading && (
        <Rings ariaLabel="loading-indicator" color={theme.primary} />
      )}
      {!isLoading &&
        filteredProjects.map((repo) => (
          <ProjectCard key={repo.id} project={repo} />
        ))}
    </PageTemplate>
  )
}

export default Projects
