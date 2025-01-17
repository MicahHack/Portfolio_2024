import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'
// import "../public/themes/md-dark-deeppurple/theme.css"
import HomePage from "./pages/home.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage></HomePage>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
