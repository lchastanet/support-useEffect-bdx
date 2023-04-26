import { useState } from "react"
import Popup from "./components/Popup"

function App() {
  const [show, setShow] = useState(false)

  const handleClick = () => setShow(!show)

  return (
    <>
      <h1>Support useEffect</h1>
      <button onClick={handleClick}>Switch</button>

      {show && <Popup setShow={setShow} />}
    </>
  )
}

export default App
