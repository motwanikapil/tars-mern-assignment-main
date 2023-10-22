import axios from "axios"
import React from "react"

export const fetchDataFromUnsplash = async (url) => {
  const response = await axios.get(url)
  console.log(response)
  return response.data
}
