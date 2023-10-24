import React, { useContext } from "react"
import { Image } from "../components/Image"
import { DataContext } from "../App"

export const Images = () => {
  const { data } = useContext(DataContext)
  const imagesPerRow = 3
  const groupImagesIntoColumns = () => {
    const rows = []

    const numberOfIterations = data.length - (data.length % imagesPerRow)
    let i = 0,
      j = 0
    for (; i < numberOfIterations; i += imagesPerRow) {
      rows.push(data.slice(i, i + imagesPerRow))
    }
    if (data.length % imagesPerRow !== 0) {
      while (j < rows.length && i < data.length) {
        rows[j].push(data[i])
        j++
        i++
      }
    }
    return rows
  }

  const columnsOfImages = groupImagesIntoColumns()

  return (
    <div className="row">
      {columnsOfImages.map((columnOfImages) => {
        return (
          <div className={`col-${Math.ceil(12 / imagesPerRow)}`}>
            {columnOfImages.map((image) => (
              <Image image={image} />
            ))}
          </div>
        )
      })}
    </div>
  )
}
