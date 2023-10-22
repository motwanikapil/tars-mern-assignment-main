import React, { useEffect, useState } from "react"
import { Image } from "../components/Image"
import axios from "axios"
import { URL, ACCESS_KEY } from "../utils/Important"
import { fetchDataFromUnsplash } from "../components/FetchDataFromUnsplash"

export const Images = () => {
  const [data, setData] = useState([])
  const axiosUrl = `${URL}/photos/?client_id=${ACCESS_KEY}`

  useEffect(
    () => async () => {
      setData(await fetchDataFromUnsplash(axiosUrl))
    },
    []
  )

  const groupImagesIntoColumns = () => {
    const rows = []
    const imagesPerRow = 3
    for (let i = 0; i < data.length; i += imagesPerRow) {
      rows.push(data.slice(i, i + imagesPerRow))
    }
    return rows
  }

  const columnsOfImages = groupImagesIntoColumns()

  return (
    <div className="row">
      {columnsOfImages.map((columnOfImages) => {
        return (
          <div className="col-4">
            {columnOfImages.map((image) => (
              <Image image={image} />
            ))}
          </div>
        )
      })}
    </div>
  )
}
