import React from "react"
import Helmet from "react-helmet"
// prettier-ignore
import { About, Landing, Navbar } from "../../components"
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
    </>
  )
}

export default Main
