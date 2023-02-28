import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../Pages/Pages.css'

function Users() {
    const[users,setUsers]=useState([])
    const [isloading,setLoading]=useState(true)

    useEffect(()=>{
        getUsers()
    },[])

    const getUsers=async()=>{
        try {
            const user=await axios.get("https://motorcycle-service-app.onrender.com/users",{
                headers:{
                    Authorization:`${window.localStorage.getItem("token")}`
                }
            })
            setUsers(user.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
    
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-2'>
                <Link to='/adminportal/adminhome' className='btn btn-primary'>Back</Link>
            </div>
        </div>
        <div className='row ' style={{marginTop:"25px"}}>
            <div className='col-12 table-detail'>
                <table class="table">
                    <thead className=' table-dark'>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">City</th>
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
                                users.map((item)=>{
                                    return(
                                        <tr>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.city}</td>
                                            <td>
                                                <Link to={`/adminportal/userdetails/${item._id}`} className='btn btn-primary btn-sm'>View Details</Link>
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
  )
}

export default Users


