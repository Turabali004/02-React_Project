import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import Layout from './Layout/Layout'
// import Home from '../src/components/Home/Home'
// import About from '../src/components/About/About'
// import Blog from '../src/components/Blog/Blog'
// import User from '../src/components/About/About'


// const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <Layout/>,
  //   children : [
  //     {
  //       path: "",
  //       element: <Home/>,
  //     },
  //     {
  //       path: "about",
  //       element: <About/>,
  //     },
  //     {
  //       path: "contact",
  //       element: <h1>This is contact</h1>,
  //     },
  //     {
  //       path: "Services",
  //       element: <h1>This is services</h1>,
  //     },
  //   ]
  // }

  
// ])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='' element = {<Layout/>}>
//        <Route path='/' element = {<Home />}/>
//        <Route path='about' element = {<About />}/>
//        <Route path='contact' element = {<h1>Contact Page</h1>}/>
//        <Route path='services' element = {<h1>Services Page</h1>}/>
//        <Route path = "blog/:userid/:company" element = {<Blog />} />
//        {/* <Route path='blog' element = {<h1>This is blog page</h1> }/> */}
//        {/* <Route path='user' element = {<User></User> }/>
//        <Route path='user/:userid' element = {<User></User> }/> */}
//     </Route>
//   )
// )



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App/>
  </React.StrictMode>,
)
