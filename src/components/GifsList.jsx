import { useEffect, useState, useCallback } from "react"

function GifsList() {
  const [gifs, setGifs] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    const abortController = new AbortController()

    if (search.length > 0) {
      fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=bAop3M2ilbOmuT1UVghEWs1gipThMmSv&q=${search}&limit=5`,
        { signal: abortController.signal }
      )
        .then((res) => res.json())
        .then((json) => setGifs(json.data))
        .catch((err) => console.error(err))
    } else {
      fetch(
        "https://api.giphy.com/v1/gifs/trending?api_key=bAop3M2ilbOmuT1UVghEWs1gipThMmSv&limit=5",
        { signal: abortController.signal }
      )
        .then((res) => res.json())
        .then((json) => setGifs(json.data))
        .catch((err) => console.error(err))
    }

    return () => {
      abortController.abort()
    }
  }, [search])

  return (
    <div>
      <h2>GifsList</h2>

      <input
        type="text"
        name="search"
        id="search"
        value={search}
        onChange={useCallback((e) => setSearch(e.target.value))}
      />

      <br />

      {gifs.length > 0
        ? gifs.map((gif) => <img key={gif.id} src={gif.images.original.url} />)
        : null}
    </div>
  )
}

export default GifsList
