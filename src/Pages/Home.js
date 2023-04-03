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
      const types=await axios.get("https://motorcycle-service-app.onrender.com/servicetypes",{
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
     <div className='container-fluid homepage-container'>
      <div className='row' style={{marginTop:"10px" ,textAlign:"end"}}>
        <div className='col-12'>
          <Link to='/portal/booking' className='btn btn-success'>Book a service</Link>
        </div>
      </div>
      <div className='row home-card-container'>
        <h5 className='homepage-heading'>Available services</h5>
      </div>
      <div className='row' style={{paddingLeft:"80px"}}>
          {
            service.map((item)=>{
              return(
                <div className='col-md-3 cards'>
                  <div class="card" style={{width:'18rem'}}>
                    <img  src={item.img} class="card-img-top img-card" alt="..."/>
                    <div class="card-body">
                      <p class="card-text">{item.title}</p>
                      <Link className='btn btn-primary homecard-bttn' to={`/portal/view/${item._id}`}>View details</Link>
                    </div>
                  </div>
                </div>)})}
      </div>
    </div>
  )
}

export default Home