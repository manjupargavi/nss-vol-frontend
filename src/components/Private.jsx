import React from 'react';
import {Navigate,Outlet } from 'react-router-dom'
const Private=()=>{
    const auth = localStorage.getItem("admin");
    return auth ?<Outlet/>:<Navigate to="signup"/>
}
export default Private