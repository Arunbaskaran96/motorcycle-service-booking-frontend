
import React from 'react'
import { Link } from 'react-router-dom'
import '../Componenets/Components.css'

function Sidebar() {
  return (
    <div className='side-conatiner'>
        <ul className='side-lists'>
          <Link className='sidebar-li' to='/portal/home' >
            <li className='side-container-list'>Service</li>
          </Link><br></br>
          <Link className='sidebar-li' to='/portal/userhistory' >
          <li className='side-container-list'>History</li>
          </Link><br></br>
        </ul>
    </div>
  )
}

export default Sidebar