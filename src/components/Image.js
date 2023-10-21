// import React from "react"

// export const Image = ({ url }) => {
//   return (
//     <div className="card">
//       <img src={url} className="card-img-top img-fluid" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">Card title</h5>
//         <p className="card-text">
//           This is a longer card with supporting text below as a natural lead-in
//           to additional content. This content is a little bit longer.
//         </p>
//       </div>
//     </div>
//   )
// }

import React from "react"

export const Image = ({ url, profileImage }) => {
  return (
    <div className="card">
      <img src={url} className="card-img-top" alt="nothing" />
      <div className="card-body">
        <h5 className="card-title">This is a caption</h5>
        <p className="card-text">Author: Kapil Motwani</p>
        <img
          src={profileImage}
          className="rounded-circle author-avatar"
          alt={`Avatar of Kapil`}
        />
      </div>
    </div>
  )
}
