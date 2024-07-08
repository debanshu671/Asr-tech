import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/home/Home.jsx';
import Servise from './pages/Servise.jsx'
import About from './pages/About-us.jsx'
import Internship from './pages/Internship.jsx'
import Testimonial from './pages/Testimonial.jsx'
import Portfolios from './pages/Portfolios.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Servise",
    element: <Servise />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Internship",
    element: <Internship />,
  },
  {
    path: "/Portfolios",
    element: <Portfolios />,
  },
  {
    path: "/Testimonial",
    element: <Testimonial />,
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)


export default main;
