import React, { useContext } from 'react'
import Home from './Home'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import context from './Context'
import Login from './Login'
function Homepage() {
  const {isloggedin}=useContext(context)
  return (
    <>
    {isloggedin?<div><Navbar></Navbar>
    <Outlet/>
    </div>:<Login/>
    
    }
    </>
  )
}

export default Homepage