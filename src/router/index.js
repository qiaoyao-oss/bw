
// import {lazy,Suspense} from 'react'
// import {Navigate,BrowserRouter,Routes,Route} from 'react-router-dom'

// let arr=[
//     {
//         path:'/',
//         to:"/login"
//     },
//     {
//     path:'/login',
//     element:lazy(()=>import('../page/login/index'))
//   },
// ]

// const Routerconfig = () => {
//   return (
//     <Suspense fallback={<div>加载中.....</div>}>
//     <BrowserRouter>
//       <Routes>
//         {
//             arr.map((item,index)=>{
//                 return(
//                     <Route key={index} path={item.path} element={item.element?<item.element></item.element>:<Navigate to={item.to}></Navigate>}>

//                         {/*二级 */}
//                         {
//                             item.children&&item.children.length?item.children.map((items,indexs)=>{
//                                 return(
//                                     <Route key={indexs} path={items.path} element={items.element?<items.element></items.element>:<Navigate to={items.to}></Navigate>}></Route>
//                                 )
//                             }):''
//                         }


//                     </Route>
//                 )
//             })
//         }
//     </Routes>
//     </BrowserRouter>
//     </Suspense>
//   )
// }

// export default Routerconfig



import Login from "../page/login/index.tsx";
import Register from "../page/register/index.tsx"
import Home from "../page/home/index.tsx"
import Design from "../page/design/index.tsx"
import Homehome from "../page/home/homeHome/index.tsx"

import Brand from "../page/home/brand/index.tsx"
import One from "../page/login/one/index.tsx"

import Two from "../page/login/two/index.tsx"
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
        children: [
            {
                path: '/one',
                element: <One />,
            },
            {
                path: '/two',
                element: <Two />,
            }
        ]
    },
    {
        path: '/register',
        element: <Register />
    },
      {
        path: '/home',
        element: <Home />,
         children: [
            {
                path: '/home/homeHome',
                element: <Homehome />,
            },
            {
                path: '/home/brand',
                element: <Brand />,
            }
        ]
    },
     {
        path: '/design',
        element: <Design />
    },
    
])

export default router