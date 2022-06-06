import { getProjects } from "../../api"
import { one } from "../../assets"

export const handleProjects = async () => {
  const rawProjects = await getProjects()
  // actions
  let transformProjects = []
  rawProjects.forEach((project) => {
    transformProjects.push({
      id: project.id,
      isTemplate: project.is_template,
      projectName: project.name,
      projectDesc: project.description,
      tags: project.topics,
      code: project.svn_url,
      demo: project.homepage,
      image: one,
    })
  })

  return transformProjects
}
