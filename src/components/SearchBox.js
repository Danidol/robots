import React from "react"

const SearchBox = ({ searchfield, searchChange }) => {
  return <input type="search" placeholder="search Robots" onChange={searchChange} />
}

export default SearchBox
