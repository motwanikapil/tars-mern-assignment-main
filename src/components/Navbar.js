import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { URL, ACCESS_KEY } from "../utils/Important"
import axios from "axios"
import { fetchDataFromUnsplash } from "./FetchDataFromUnsplash"

export const Navbar = () => {
  const [search, setSearch] = useState("")
  const axiosUrl = `${URL}/search/photos?client_id=${ACCESS_KEY}&query=${search}`

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Navbar
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
                    className="form-control"
                    placeholder="Search Images Here..."
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>

              <button
                className="btn btn-outline-primary me-3"
                type="submit"
                onClick={() => console.log(fetchDataFromUnsplash(axiosUrl))}
              >
                Search
              </button>
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
