// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';



// import router from "./router/index"

// import {  RouterProvider } from 'react-router-dom'

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>

//     <RouterProvider router={router}></RouterProvider>
//   </React.StrictMode>
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import router from "./router/index"
import "amfe-flexible";
import { RouterProvider } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(

  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>

);

