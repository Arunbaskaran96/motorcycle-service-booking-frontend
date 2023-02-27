
import React from 'react'
import { Link } from 'react-router-dom'
import '../Componenets/Components.css'

function Sidebar() {
  return (
    <div className='side-conatiner'>
        <ul className='side-lists'>
          <Link className='sidebar-li' to='/portal/home' >Service</Link><br></br>
          <Link className='sidebar-li' to='/portal/shop' >Shops</Link><br></br>
          <Link className='sidebar-li' to='/portal/userhistory' >History</Link><br></br>
        </ul>
    </div>
  )
}

export default Sidebar