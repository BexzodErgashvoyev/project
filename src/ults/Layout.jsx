import React from 'react'
import { NavbarDefault } from '../companets/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () =>  {
  return (
    <div>
        <NavbarDefault />
        <Outlet />
    </div>
  )
}

export default Layout