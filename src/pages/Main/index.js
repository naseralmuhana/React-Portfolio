import React from "react"
import Helmet from "react-helmet"
// import { Footer } from "../../components"
import { headerData } from "../../data/headerData"
// prettier-ignore
import { About, Achievement, Blog, Contacts, Education, Experience, Landing, Header, Projects, Services, Skills, Testimonials } from "./components"

const Main = () => {
  return (
    <>
      <Helmet>
        <title>{headerData.name} - Portfolio</title>
      </Helmet>

      <Header />
      <main>
        <Landing />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Achievement />
        <Services />
        <Testimonials />
        <Blog />
        <Contacts />
      </main>
    </>
  )
}

export default Main
