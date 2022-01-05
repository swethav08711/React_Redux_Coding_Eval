import React, { useEffect, useState } from "react"
import TextField from "@material-ui/core/TextField"
import { useFetch } from "../../hook/CustomHook"
import SearchResults from "./SearchResults"

export const Home = () => {
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1)
  const { loading, data } = useFetch(
    `https://api.github.com/search/users?q=${query || "masai"}&&page=${page}`
  )
  return (
    <>
      <div>
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
    </>
  )
}
