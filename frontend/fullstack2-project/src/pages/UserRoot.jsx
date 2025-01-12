import React from 'react'
import { Outlet } from "react-router"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function UserRoot() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default UserRoot
