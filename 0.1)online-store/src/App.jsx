import { useState } from 'react'
import {Navbar, Slider} from './components/index'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Slider/>
    </>
  )
}

export default App
