import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import { LandingPage, RegisterForm, ProductListing } from "./index"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<LandingPage/>}/>
            <Route path='register' element={<RegisterForm/>}/>
            <Route path='products' element={<ProductListing/>}/>

        </Route>
      </Routes>
    </div>
  )
}

export default App
