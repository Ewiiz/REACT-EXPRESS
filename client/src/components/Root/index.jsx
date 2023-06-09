import React from 'react'
import Profile from '../Profile'
import { Outlet } from 'react-router-dom'
import '../../style/root.css'

function Root() {
  return (
    <div className="container">
      <Profile/>
      <Outlet/>
    </div>
  )
}

export default Root