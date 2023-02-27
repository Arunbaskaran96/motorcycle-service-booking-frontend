import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../Pages/Pages.css'

function Details() {
  const[datas,setDatas]=useState({})
  const params=useParams()
  const [isloading,setLoading]=useState(true)
  useEffect(()=>{
    getDetails()
  },[])

  const getDetails=async()=>{
    try {
      const detail=await axios.get(`http://localhost:8000/servicetype/${params.id}`,{
        headers:{
          Authorization:`${window.localStorage.getItem("token")}`
        }
      })
      setDatas(detail.data)
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
    <div>
    <>
    <Link to='/portal/home' className='btn btn-secondary'>Back</Link>
    </>
    <div className='main-container'>
      <div className='container'>
        <div className='row '>
          <div className='col-12 card-img'>
            <img className='detail-img' src={datas.img2} alt='imgs'></img>
          </div>
          <div className='row'>
          <div className='col-6 card-row'>
            <h5>Title:</h5>
            <h5>Price:</h5>
            <h5 style={{marginTop:"20px"}} >Description:</h5>
          </div>
          <div className='col-6'>
            <p>{datas.title}</p>
            <p>{datas.price}</p>
            <p>{datas.des}</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Details