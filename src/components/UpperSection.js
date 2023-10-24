import React from "react"
import "./UpperSection.css"

export const UpperSection = () => {
  return (
    <div className="mb-5 mt-3 upper-section">
      <div className="upper-section-content text-center">
        <h2 className="text-white fw-bold mb-3">
          Download High Quality Images by creators
        </h2>
        <h5 className="text-white mb-5">
          Over 2.4 million stock images by our talented community
        </h5>
        <form className="form-group mb-3">
          <input
            type="text"
            placeholder="Search resolution images, collections and wallpapers..."
            className="form-control p-3"
          />
        </form>
      </div>
    </div>
  )
}
