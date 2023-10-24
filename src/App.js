import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Homepage } from "./pages/Homepage"
import { Navbar } from "./components/Navbar"
import { createContext, useEffect, useState } from "react"
import { ACCESS_KEY, URL } from "./utils/Important"
import { fetchDataFromUnsplash } from "./components/FetchDataFromUnsplash"

export const DataContext = createContext()

function App() {
  const axiosUrl = `${URL}/photos/?client_id=${ACCESS_KEY}&per_page=30`
  const [data, setData] = useState([])
  const [url, setUrl] = useState(axiosUrl)

  useEffect(() => {
    fetchDataFromUnsplash(url)
      .then((response) => {
        if (url.includes("/search/photos")) {
          setData(response.data.results)
        } else setData(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [url])

  return (
    <DataContext.Provider value={{ data, setData, url, setUrl }}>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Router>
      </div>
    </DataContext.Provider>
  )
}

export default App
