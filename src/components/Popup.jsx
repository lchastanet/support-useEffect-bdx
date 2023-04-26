import { useEffect, useState } from "react"

function Popup({ setShow }) {
  const [valid, setValid] = useState(false)
  const [sign, setSign] = useState("")

  useEffect(() => {
    console.log("🚀 Popup mounted")

    return () => {
      console.log("🗑️ Popup unmount")
    }
  }, [])

  useEffect(() => {
    console.log("🪄 sign chnaged")
  }, [sign])

  useEffect(() => {
    const interval = setInterval(() => console.log("tic-tac"), 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const handleValidChange = () => setValid(!valid)

  const handleSignChange = (e) => {
    setSign(e.target.value)
  }

  const handleClick = () => setShow(false)

  return (
    <div className="popup">
      <h2>Popup</h2>
      <input
        type="checkbox"
        name="valid"
        id="valid"
        checked={valid}
        onChange={handleValidChange}
      />{" "}
      {valid ? <span>✅ Accept</span> : <span>❌ Refuse</span>}
      <p>
        <input
          type="text"
          name="sign"
          id="sign"
          value={sign}
          onChange={handleSignChange}
        />
      </p>
      <button onClick={handleClick}>Close</button>
    </div>
  )
}

export default Popup
