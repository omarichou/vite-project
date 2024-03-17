import SignUp from './page/signUp';
import Home from './page/Home';
import Page2 from './page/page2';

import { useEffect, useState } from 'react'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h1>error</h1>,
  },
  {
    path: "/page2.html",
    element: <Page2/>,
  },
  {
    path: "/signUp.html",
    element: <SignUp/>,
  },
]);

function App() {
   
  return (
    <>
 <RouterProvider router={router} />
    </>
  )
}

export default App
