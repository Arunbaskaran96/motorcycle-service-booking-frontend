import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../../Pages/Pages.css"

function UserDetails() {
    const[user,setUser]=useState({})
    const params=useParams()
    const[isloading,setLoading]=useState(true)

    useEffect(()=>{
        getUser()
    },[])

    const getUser=async()=>{
        try {
            const newuser=await axios.get(`http://localhost:8000/user/${params.id}`,{
                headers:{
                    Authorization:`${window.localStorage.getItem("token")}`
                }
            })
            setUser(newuser.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-2'>
                <Link to='/adminportal/users' className='btn btn-primary'>Back</Link>
            </div>
        </div>
        {
            isloading?
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="sr-only"></span>
                </div>
            </div>:
            (
                <div className='row  bookdet-container'  style={{marginTop:"40px"}}>
                <div className='col-4' style={{textAlign:"end"}}>
                <h5 className='bookindet-label'>Name :</h5>
                    <h5 className='bookindet-label'>Email :</h5>
                    <h5 className='bookindet-label'>Contact :</h5>
                    <h5 className='bookindet-label'>City :</h5>
                </div>
                <div className='col-4'>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.mobile}</p>
                    <p>{user.city}</p>
                </div>
            </div>
            )
        }
    </div>
  )
}

export default UserDetails