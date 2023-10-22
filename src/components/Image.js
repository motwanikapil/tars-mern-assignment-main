import React from "react"

export const Image = ({ image }) => {
  const likes = image.likes
  const mainImage = image?.urls.small
  const username =
    (image?.user.first_name || "") + " " + (image?.user.last_name || "")
  const instagramUsername = image?.user.instagram_username
  const userPhoto = image?.user.profile_image?.small
  return (
    <div className="card mb-5">
      <img src={mainImage} className="card-img-top" alt="..." />
      {console.log(image)}
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex">
            <img
              src={userPhoto}
              className="rounded-circle me-3"
              alt={username}
            />

            <div>
              <h6 className="card-title">
                {username && <span>{username}</span>}
              </h6>
              {instagramUsername && (
                <span className="text-muted">@{instagramUsername}</span>
              )}
            </div>
          </div>
          <div>
            {likes && (
              <span>
                <i class="fa-regular fa-thumbs-up"></i>
                {likes}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
