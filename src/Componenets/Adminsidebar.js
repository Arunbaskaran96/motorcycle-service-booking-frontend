import React from 'react'
import { Link } from 'react-router-dom'
import '../Componenets/Components.css'

function Adminsidebar() {
  return (
    <div className='adminside-conatiner'>
        <ul className='admin-lists'>
            <li className='admin-li'>
              <Link className='adminside-link' to='/adminportal/adminhome'>Orders</Link>
            </li>
            <li className='admin-li'>
            <Link className='adminside-link' to='/adminportal/users'>Users</Link>
            </li>
            <li className='admin-li'>
            <Link className='adminside-link' to='/adminportal/employers'>Employee's</Link>
            </li>
            <li className='admin-li'>
            <Link className='adminside-link' to='/adminportal/adminhistory'>History</Link>
            </li>
            <li className='admin-li'>
            <Link className='adminside-link' to='/adminportal/adminreview'>Reviews</Link>
            </li>
        </ul>
    </div>
  )
}

export default Adminsidebar