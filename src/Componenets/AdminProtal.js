import React from 'react'
import { Outlet } from 'react-router-dom'
import Adminsidebar from './Adminsidebar'
import AdminTopbar from './AdminTopbar'


function AdminProtal() {
  return (
    <div>
        <AdminTopbar/>
        <div className='portal-card'>
          <Adminsidebar/>
          <Outlet/>
        </div>
    </div>
  )
}

export default AdminProtal