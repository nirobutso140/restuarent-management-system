import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout.jsx';
import Home from './Home/Home.jsx';
import MyMenu from './Pages/MyMenu.jsx';

import Contact from './Pages/Contact.jsx';
import OrderFood from './Pages/OrderFood/OrderFood.jsx';
import Login from './Pages/Login/Login.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Register from './Pages/Register/Register';
import PrivetRoute from './PrivetRoute/PrivetRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/menu",
        element: <PrivetRoute> <MyMenu/></PrivetRoute>
      },
      {
        path: "/shop",
        element: <PrivetRoute><OrderFood/></PrivetRoute> 
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className='max-w-screen-xl mx-auto'>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
     </div>
  </React.StrictMode>,
)
