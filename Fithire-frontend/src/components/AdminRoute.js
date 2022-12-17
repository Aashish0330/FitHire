import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import {isAdminLoggedIn} from '../index';
const PrivateAdminRoute = () => {
     
    return isAdminLoggedIn() ? <Outlet/> : <Navigate to={"/login"} />
}

export default PrivateAdminRoute