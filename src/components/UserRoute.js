import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import {isUserLoggedIn} from '../index';
const PrivateAdminRoute = () => {
     
    return isUserLoggedIn() ? <Outlet/> : <Navigate to={"/login"} />
}

export default PrivateAdminRoute