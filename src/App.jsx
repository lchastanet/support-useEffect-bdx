import { useState } from "react"
import Popup from "./components/Popup"
import GifsList from "./components/GifsList"

function App() {
  const [show, setShow] = useState(false)
  const [showGifs, setShowGifs] = useState(false)

  const handleClick = () => setShow(!show)
  const handleClickGifs = () => setShowGifs(!showGifs)

  return (
    <>
      <h1>Support useEffect</h1>
      <button onClick={handleClick}>Switch</button>

      {show && <Popup setShow={setShow} />}

      <button onClick={handleClickGifs}>Show Gifs</button>

      {showGifs && <GifsList setShowGifs={setShowGifs} />}
    </>
  )
}

export default App
