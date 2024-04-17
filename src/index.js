import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      {/* <Route path='/services' element={<Services />} /> */}
       
      
      
          {/*  Resources routes here  */}
      
    </Route>
  )
)

root.render(
  <RouterProvider router={router}>
        <App />
    </RouterProvider>
);

