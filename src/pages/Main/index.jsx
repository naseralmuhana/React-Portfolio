import { Wrapper } from "../../components"
// prettier-ignore
import { 
  About, Achievements, Blogs, Contacts, Education, Experience, Landing, Header, Projects, Services, Skills, Testimonials 
} from "./components"

const Main = () => {
  return (
    <Wrapper title="Portfolio">
      <Header />
      <main>
        <Landing />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Services />
        <Testimonials />
        <Blogs />
        <Contacts />
      </main>
    </Wrapper>
  )
}

export default Main
