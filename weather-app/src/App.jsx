import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherDisplay from './components/WeatherDisplay'
import DisplayNYT from './components/DisplayNYT'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WeatherDisplay />
      <DisplayNYT/>
    </>
  )
}

export default App
