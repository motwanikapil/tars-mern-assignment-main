import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Homepage } from "./pages/Homepage"
import { Navbar } from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/" element={<Gallery images={data} />} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
