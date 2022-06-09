import { AnimatePresence } from "framer-motion"
import { Route, Routes, useLocation } from "react-router-dom"
import { Blogs, Main, Projects } from "./pages"
import { ScrollToTop } from "./utils"

const App = () => {
  const location = useLocation()
  return (
    <AnimatePresence>
      <ScrollToTop>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </ScrollToTop>
    </AnimatePresence>
  )
}

export default App
