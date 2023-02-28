import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Employer() {
  const [employers,setEmployers]=useState([])
  const[isloading,setLoading]=useState(true)

  useEffect(()=>{
    getEmployer()
  },[])

  const getEmployer=async()=>{
    try {
      const emp=await axios.get("https://motorcycle-service-app.onrender.com/employers",{
        headers:{
          Authorization:`${window.localStorage.getItem("token")}`
        }
      })
      setEmployers(emp.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const Remove=async(_id)=>{
    try {
      alert("Do yo want to Delete?")
      await axios.delete(`hhttps://motorcycle-service-app.onrender.com/employer/${_id}`,{
        headers:{
          Authorization:`${window.localStorage.getItem("token")}`
        }
      })
      getEmployer()
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='container'>
    <div className='row' style={{marginTop:"20px"}}>
      <div className='col-2'>
        <Link to='/adminportal/addemployer' className='btn btn-success'>Add Employer</Link>
      </div>
        <div className='col-12 '>
            <div className='table-container table-detail'>
                <table class="table">
                    <thead className=' table-dark'>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Role</th>
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
                              employers.map((item)=>{
                                  return(
                                      <tr>
                                      <td>{item.name}</td>
                                      <td>{item.mobile}</td>
                                      <td>{item.role}</td>
                                      <td>
                                          <Link to={`/adminportal/viewemployer/${item._id}`} className='btn btn-primary btn-sm' style={{marginRight:"5px"}}>View</Link>
                                          <Link to={`/adminportal/editemployer/${item._id}`} className='btn btn-info btn-sm'  style={{marginRight:"5px"}}>Edit</Link>
                                          <button onClick={()=>Remove(item._id)} className='btn btn-danger btn-sm'>Delete</button>
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

export default Employer