import React, { useEffect, useState } from "react"
import TextField from "@material-ui/core/TextField"

import SearchResults from "./SearchResults"
import style from "./input.module.css"
import Pagination from "./Pagination"
export const Home = () => {
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(5)

  useEffect(() => {
    fetch(`https://api.github.com/search/users?q=${query || "masai"}`)
      .then(res => res.json())
      .then(res => {
        setData(res)
        setLoading(false)
      })
      .catch(err => {
        setError(true)
        setLoading(false)
      })
  }, [])
  console.log(data.items)
  // const indexOfLastPost = currentPage * postsPerPage
  // const indexOfFirstPost = indexOfLastPost - postsPerPage
  // const currentPost = data.items.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = pageNumber => setCurrentPage(pageNumber)
  return (
    <>
      <div className={style.inputField}>
        <TextField
          style={{ width: "20%" }}
          label="Search input"
          margin="normal"
          variant="outlined"
          onChange={e => setQuery(e.target.value)}
        />
      </div>
      {loading && "LOADING"}
      {!loading &&
        data &&
        data.items.map(item => <SearchResults data={item} />)}
      {/* <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.items.length}
        paginate={paginate}
      /> */}
    </>
  )
}
