import React from "react"
import { Route, Routes } from "react-router-dom"
import { ColorSwitcher, ScrollToTop } from "./components"
import { Main } from "./pages"

const App = () => {
  return (
    <div className="app">
      <ColorSwitcher />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <ScrollToTop />
    </div>
  )
}

export default App
