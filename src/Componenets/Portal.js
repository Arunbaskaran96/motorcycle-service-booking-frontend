import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import '../Pages/Pages.css'

function Portal() {
  return (
    <div>
        <Topbar/>
        <div className='portal-card'>
            <Sidebar/>
            <Outlet></Outlet>
            </div>
    </div>
  )
}

export default Portal