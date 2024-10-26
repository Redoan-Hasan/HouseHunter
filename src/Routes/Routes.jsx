import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/About Us/AboutUs";
import EstateDetails from "../pages/EstateDetails/EstateDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Components/Register/Register";
import ContactUs from "../pages/ContactUs/ContactUs";
import PrivateRoute from "./PrivateRoute";
import ProfileUpdate from "../pages/ProfileUpdate/ProfileUpdate";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                loader:()=>fetch('/Estate.json')
            },
            {
                path:'/aboutUs',
                element:<AboutUs/>
            },
            {
                path:'/estateDetails/:id',
                element:<PrivateRoute> <EstateDetails/> </PrivateRoute>,
                loader:async({params})=>{
                    const response = await fetch('/Estate.json')
                    console.log(params.id);
                    const estates = await response.json()
                    const singleEstate = estates.find(estate=>estate.id === Number(params.id))
                    return singleEstate;
                }
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:"/contact",
                element:<ContactUs/>
            },
            {
                path:'/updateProfile',
                element:<PrivateRoute><ProfileUpdate/></PrivateRoute>
            }
        ]
    }
])