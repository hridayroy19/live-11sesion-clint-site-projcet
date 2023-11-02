import { createBrowserRouter } from "react-router-dom";
import MainLout from "../MainLout/MainLout ";
import Home from "../Page/Home";
import About from "../Page/About";
import Service from "../Page/service";
import Login from "../Page/Login";
import Register from "../Page/Register";


const Router = createBrowserRouter([
    {
        path:"/",
        element:<MainLout/>,
       children: [{
        index:true,
        element:<Home/>
       },
       {
        path:"about",
        element:<About/>
       },
       {
        path:"service",
        element:<Service/>
       },
    ]
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    },
    
])

export default Router;