import {createBrowserRouter} from "react-router-dom"
import Layout from "../src/components/layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Notfount from "./pages/Notfount"
import Service from "./pages/Service"
import Server from "./pages/Server"
import Cart from "./pages/Cart"
import WishList from "./pages/WishList"


export const myRouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children: [
            {
                path:"/",
                element : <Home/>
            },
            {
                path:"about",
                element: <About/>

            },
            {
                path:"contact",
                element:<Contact/>

            },
           
           
            {
                path:"*",
                element:<Notfount/>

            },
            {
                path:"service",
                element:<Service/>

            },
            {
                path:"server",
                element:<Server/>

            },
            {
                path:"cart",
                element:<Cart/>

            },
            {
                path:"wishList",
                element:<WishList/>

            },
           
        ]

    }
])