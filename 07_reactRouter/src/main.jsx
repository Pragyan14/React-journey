import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Root from "./routes/Root.jsx";
import {Home,Contact,About,User} from './components/index.js'

// const router = createBrowserRouter([{
//     path:'/',
//     element:<Root/>,
//     children:[
//         {
//         path:"",
//         element:<Home/>
//         },
//         {
//             path:"about",
//             element:<About/>
//         },
//         {
//             path:"contact",
//             element:<Contact/>
//         }
//     ]
// },])

// Method 2 to create routes

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'  element={<Root/>}>
            <Route path='' element={<Home/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='user/:userId' element={<User/>}/>
        </Route>
    )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
