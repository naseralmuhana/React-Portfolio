import React from "react"
import { Route, Routes } from "react-router-dom"
import { Main } from "./pages"

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  )
}

export default App
