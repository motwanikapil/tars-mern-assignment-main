import React, { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import { URL, ACCESS_KEY } from "../utils/Important"
import { DataContext } from "../App"
import axios from "axios"

export const Navbar = () => {
  const [search, setSearch] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const { setUrl } = useContext(DataContext)
  const noOfItems = 12

  const handleChange = (e) => {
    const value = e.target.value
    setSearch(value)

    if (value.trim() !== "") {
      setShowSuggestions(true)
      axios
        .get(`${URL}/search/photos?client_id=${ACCESS_KEY}&query=${value}`)
        .then((res) => {
          setSuggestions(res.data.results)
        })
        .catch((err) => console.log(err))
    } else {
      setSuggestions([])
    }
  }

  const handleSuggestionClick = (event, suggestion) => {
    event.preventDefault()
    setSearch(suggestion?.description || suggestion?.alt_description || "")
    setSuggestions([])
    setShowSuggestions(false)
    setUrl(
      `${URL}/search/photos?client_id=${ACCESS_KEY}&query=${search}&per_page=${noOfItems}`
    )
  }

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand fw-bold fst-italic" to="/">
            Image Gallery
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex w-100 my-3">
              <div className=" w-100">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control me-3"
                    placeholder="Search Images Here..."
                    onChange={handleChange}
                  />
                </div>
                {/* Suggestions handling */}

                {/* {showSuggestions && (

                  <ul className="bg-dark-subtle">
                    {suggestions.map((suggestion) => {
                      return (
                        <li
                          key={suggestion.id}
                          onClick={(event) => {
                            handleSuggestionClick(event, suggestion)
                          }}
                        >
                          {suggestion?.description ||
                            suggestion?.alt_description ||
                            ""}
                        </li>
                      )
                    })}
                  </ul>
                )} */}

                {/* Suggestion handling ends here */}
              </div>

              <div>
                <button
                  className="btn btn-outline-primary me-3"
                  type="submit"
                  onClick={handleSuggestionClick}
                >
                  Search
                </button>
              </div>
            </form>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Explore
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="#">
                  Collection
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="#">
                  Community
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
