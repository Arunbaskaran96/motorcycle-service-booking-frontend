
import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Componenets/Components.css'
import UserCard from '../Pages/UserCard'

function Topbar() {
  const nav=useNavigate()
  const remove=()=>{
    window.localStorage.removeItem("token")
    nav("/")
  }
  return (
    <div className='top-container'>
        <div className='img-card'>
            <img className='cmp-img' src='https://img.icons8.com/ios-filled/1x/car-service.png' alt='company-logo'/>
        </div>
        <div>
            <h6 className='cmp-name'>A2 service Private Limited</h6>
        </div>
        <div className='top-mini'>
            <h5 style={{color:"whitesmoke"}}><UserCard/></h5>
            <button className='btn btn-danger btn-sm' onClick={remove}>Log Out</button>
        </div>
    </div>
  )
}

export default Topbar