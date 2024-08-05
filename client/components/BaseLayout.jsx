import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
const BaseLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default BaseLayout
