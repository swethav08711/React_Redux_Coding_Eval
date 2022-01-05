import React, { useState, useEffect } from "react"

export function useTimeout(delay) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let timer = setTimeout(() => setReady(true), delay)

    return () => clearTimeout(timer)
  }, [])

  return ready
}

export function useFetch(url) {
  // loading
  // data
  // error
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setData(res)
        setLoading(false)
      })
      .catch(err => {
        setError(true)
        setLoading(false)
      })
  }, [url])
  console.log(data.items)

  return {
    loading,
    data,
    error,
  }
}
