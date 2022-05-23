import React from "react"
import Helmet from "react-helmet"
// prettier-ignore
import { Education, About, Landing, Navbar, Skills } from "../../components"
import { headerData } from "../../data/headerData"

const Main = () => {
  return (
    <>
      <Helmet>
        <title>{headerData.name} - Portfolio</title>
      </Helmet>

      <Navbar />
      <Landing />
      <About />
      <Education />
      <Skills />
    </>
  )
}

export default Main
