import React from "react"
import { Route, Routes } from "react-router-dom"
import { ScrollToTop } from "./components"
import { Main } from "./pages"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <ScrollToTop />
    </>
  )
}

export default App
