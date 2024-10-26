/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return (
            <div className="flex items-center justify-center h-screen">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname}  to='/login'></Navigate>
};

export default PrivateRoute;