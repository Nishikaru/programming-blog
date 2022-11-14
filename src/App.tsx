import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import { element } from 'prop-types';
import Home from './Comp/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        }
      ]
    }
  ])
  return (
    <div className='bg-black/40 h-screen w-screen overflow-x-hidden overflow-y-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
