import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [height, setHeight] = useState("")
  const [error, setError] = useState(false)
  const [result, setResult] = useState("")
  const handlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(event.target.value)
  }
  const count = () => {
    if (!height) return
    if ((Number(height)) > 100 && (Number(height)) < 210) {
      const perfecWeight = (Number(height) - 100) - (Number(height) - 150) / 2//
      setError(false)
      setResult(perfecWeight.toString())
    }
    else { setError(true) }

  }
  const clear = () => {
    setError(false)
    setHeight("")
    setResult("")

  }
  return (
    <div className="App">
      <form onSubmit={(event) => {
        event.preventDefault()
        count()
      }}>
        <input onChange={handlChange} value={height} type="number" />
        <button type='submit'>  Рассчитать</button>
        <button onClick={clear}>Очистить</button>
        <div>{error ? "ошибка" : result ? result : null}</div>
      </form>

    </div>
  )
}

export default App
