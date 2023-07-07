import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import Main from './Layout/Main';
import About from './Pages/About';
import Projects from './Pages/Projects';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
         element: <Home></Home>,
      },

     {
        path: "/about",
         element: <About></About>
      },
      {
        path: "/projects",
         element: <Projects></Projects>,
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
