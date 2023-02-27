import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Pages/Pages.css'

function Home() {
  const [service,setService]=useState([])
  const[isloading,setLoading]=useState(true)

  useEffect(()=>{
    getData()
  },[])

  const getData=async()=>{
    try {
      const types=await axios.get("http://localhost:8000/servicetypes",{
        headers:{
          Authorization:`${window.localStorage.getItem("token")}`
        }
      })
      setService(types.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    isloading?
     <div class="text-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
     </div>:   
     <div className='container'>
      <div className='row' style={{marginTop:"10px"}}>
        <div className='col-3'>
          <Link to='/portal/booking' className='btn btn-success'>Book a service</Link>
        </div>
      </div>
      <div className='row home-card-container'>
        <h5>Available services</h5>
          {
            service.map((item)=>{
              return(
                <div className='col-md-3 cards'>
                  <div class="card" style={{width:'18rem'}}>
                    <img  src={item.img} class="card-img-top img-card" alt="..."/>
                    <div class="card-body">
                      <p class="card-text">{item.title}</p>
                      <Link className='btn btn-primary ' to={`/portal/view/${item._id}`}>View details</Link>
                    </div>
                  </div>
                </div>)})}
      </div>
    </div>
  )
}

export default Home