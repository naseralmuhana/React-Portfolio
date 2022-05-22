import React from "react"
import ReactDOM from "react-dom/client"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import ThemeContextProvider from "./contexts/ThemeContext"
import UIContextProvider from "./contexts/UIContext"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <ThemeContextProvider>
    <UIContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UIContextProvider>
  </ThemeContextProvider>
)

reportWebVitals()
