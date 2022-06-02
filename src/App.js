import React from "react"
import { Route, Routes } from "react-router-dom"
import { Footer, ScrollToTop } from "./components"
import { Main, Projects } from "./pages"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
