import React from "react"
import Front from "./Main"
import { BrowserRouter as Router } from "react-router-dom"

import "../styles/main.css"

function App() {
  return (
    <Router>
      <Front />
    </Router>
  )
}

export default App
