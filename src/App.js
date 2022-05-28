import React from "react"
import { Route, Routes } from "react-router-dom"
import { ScrollToTop } from "./components"
import { Main } from "./pages"

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <ScrollToTop />
    </div>
  )
}

export default App
