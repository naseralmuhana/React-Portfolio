import { Grid } from "@mui/material"
import { useState } from "react"
import { PageTemplate } from "../../components"
import { projectsData } from "../../data"
import ProjectCard from "../Main/components/Projects/ProjectCard"

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projectsData)
  const handleSearch = (search) => {
    setFilteredProjects(
      projectsData.filter((project) => {
        const content = project.projectName + project.projectDesc + project.tags
        return content.toLowerCase().includes(search.toLowerCase())
      })
    )
  }
  const settings = {
    tabTitle: "Projects",
    title: "Projects",
    placeholder: "Search project...",
    onSearch: handleSearch,
  }

  return (
    <PageTemplate {...settings}>
      {filteredProjects.map((project) => (
        <Grid item>
          <ProjectCard id={project.id} project={project} />
        </Grid>
      ))}
    </PageTemplate>
  )
}

export default Projects
