import React, { useEffect, useState } from "react"
import { Image } from "../components/Image"
import axios from "axios"
import { URL, ACCESS_KEY } from "../utils/Important"
import "./Gallery.css"

export const Images = () => {
  const [data, setData] = useState([])
  const axiosUrl = `${URL}?client_id=${ACCESS_KEY}`

  // const tweakData = () => {
  //   const newData = data.map((imageObject) => {

  //   })
  // }

  useEffect(() => {
    axios
      .get(axiosUrl)
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <div>
      {/* <div className="row row-cols-1 row-cols-md-3 g-4"> */}
      <div className="gallery">
        {data.map((image) => {
          return (
            <div className="col" id={image.id}>
              <Image url={image.urls.thumb} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
