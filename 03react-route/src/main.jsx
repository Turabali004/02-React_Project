// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// // import App1 from './App1.jsx'


// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Layout from './Layout.jsx'
import {  RouterProvider, createBrowserRouter, } from 'react-router-dom'
import About from './components/About/About.jsx'
// import Contact from './components/Contact/Contact.jsx'


let router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Layout />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App/> */}
  </React.StrictMode>,
)