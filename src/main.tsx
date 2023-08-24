import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Userdata from './Userdata.tsx';
import JSONData from './JSONData.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
    {
      path: "/Userdata",
      element:<Userdata></Userdata>,
    },
    {
      path: "/JSONData",
      element:<JSONData></JSONData>,
      
    },
    {
      path: "/",
      element:<Userdata></Userdata>,
    }
  
  ],
},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
)

