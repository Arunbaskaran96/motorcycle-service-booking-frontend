import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../Pages/Pages.css'
function AdminHome() {
    const [detail,setDetails]=useState([])
    const[isloading,setLoading]=useState(true)

    useEffect(()=>{
        getDetails()
    },[])

    const getDetails=async()=>{
        const det=await axios.get("https://motorcycle-service-app.onrender.com/bookingdetails",{
            headers:{
                Authorization:`${window.localStorage.getItem("token")}`
            }
        })
        setDetails(det.data)
        setLoading(false)
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12'>
                <div className='table-container  table-detail'>
                    <table class="table">
                        <thead className=' table-dark'>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Vehicle-Model</th>
                                <th scope="col">Type</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {
                            isloading?
                            <div class="d-flex justify-content-center">
                                <div class="spinner-border" role="status">
                                    <span class="sr-only"></span>
                                </div>
                            </div>:
                            (
                                <tbody>
                                {
                                    detail.map((item)=>{
                                        return(
                                            <tr>
                                            <td>{item.name}</td>
                                            <td>{item.model}</td>
                                            <td>{item.type}</td>
                                            <td>
                                                <Link to={`/adminportal/bookingdetails/${item._id}`} className='btn btn-primary btn-sm'>View Details</Link>
                                            </td>
                                        </tr>
                                        )
                                    })
                                }
                            </tbody>
                            )
                        }
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminHome