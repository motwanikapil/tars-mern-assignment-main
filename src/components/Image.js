import { faThumbsUp } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"

export const Image = ({ image }) => {
  // const [showModal, setShowModal] = useState(false)

  const likes = image.likes
  const mainImage = image?.urls.small
  const username =
    (image?.user.first_name || "") + " " + (image?.user.last_name || "")
  const instagramUsername = image?.user.instagram_username
  const userPhoto = image?.user.profile_image?.small
  const regularImage = image?.urls.regular
  const modalId = `imageModal-${image.id}`

  return (
    <div
      className="card mb-5"
      data-bs-toggle="modal"
      data-bs-target={`#${modalId}`}
    >
      <img src={mainImage} className="card-img-top" alt="..." />

      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex">
            <img
              src={userPhoto}
              className="rounded-circle w-25 h-25 me-3"
              alt={username}
            />

            <div>
              <p className="card-title fw-bold">
                {username && <span>{username}</span>}
              </p>
              {instagramUsername && (
                <span className="text-muted fs-6">@{instagramUsername}</span>
              )}
            </div>
          </div>
          <div>
            {likes && (
              <div>
                <FontAwesomeIcon icon={faThumbsUp} />
                <span className="ms-1">{likes}</span>
              </div>
            )}
          </div>

          {/* Modal starts here */}
          <div
            class="modal fade"
            id={modalId}
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            data-bs-backdrop="static"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Modal title
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div>
                    <img
                      src={regularImage}
                      alt="Full Screen"
                      className="w-100 h-100"
                    />
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal ends here */}
        </div>
      </div>
    </div>
  )
}
