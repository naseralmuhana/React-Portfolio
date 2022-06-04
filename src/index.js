import React from "react"
import ReactDOM from "react-dom/client"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { ProjectsContextProvider, ThemeContextProvider } from "./contexts"

import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <ThemeContextProvider>
    <ProjectsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProjectsContextProvider>
  </ThemeContextProvider>
)

reportWebVitals()
