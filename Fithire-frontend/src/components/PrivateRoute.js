import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import {isLoggedIn} from '../index';
const PrivateRoute = () => {
     
    return isLoggedIn() ? <Outlet/> : <Navigate to={"/login"} />
}

export default PrivateRoute