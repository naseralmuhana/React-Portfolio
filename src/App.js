import { Route, Routes } from "react-router-dom"
import { Footer, ScrollToTop } from "./components"
import { Blogs, Main, Projects } from "./pages"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
