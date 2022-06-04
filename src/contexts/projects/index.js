import React, { useContext, useEffect, useState } from "react"
import { handleProjects } from "./helper"

const ProjectsContext = React.createContext()

export const ProjectsContextProvider = ({ children }) => {
  console.log("ProjectsContextProvider")
  const [projects, setProjects] = useState([])

  useEffect(() => {
    handleProjects().then((transformProjects) => {
      setProjects(transformProjects)
    })
  }, [])

  const value = {
    projects,
  }
  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  )
}

export const useProjectsContext = () => useContext(ProjectsContext)
