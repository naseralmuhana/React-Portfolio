import { getProjects } from "../../api"
import { one } from "../../assets"

export const handleProjects = async () => {
  const rawProjects = await getProjects()
  // actions
  let transformProjects = []
  rawProjects
    .filter((repo) => repo.is_template)
    .forEach((repo) => {
      transformProjects.push({
        id: repo.id,
        projectName: repo.name,
        projectDesc: repo.description,
        tags: repo.topics,
        code: repo.svn_url,
        demo: repo.homepage,
        image: one,
      })
    })

  return transformProjects
}
