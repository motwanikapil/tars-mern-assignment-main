import React from "react"
import { NavLink } from "react-router-dom"
import { Images } from "./Images"
import { UpperSection } from "../components/UpperSection"

export const Homepage = () => {
  return (
    <>
      <UpperSection />
      <div className="container">
        <Images />
      </div>
    </>
  )
}
