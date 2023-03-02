import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Pages/Pages.css'

function UserHistory() {
  const [history,setHistory]=useState([])
  const [pending,setPending]=useState([])

  useEffect(()=>{
    getHistory()
    getInprocess()
  },[])

  const getHistory=async()=>{
    try {
      const his=await axios.get("https://motorcycle-service-app.onrender.com/userbookings",{
        headers:{
          Authorization:`${window.localStorage.getItem("token")}`
        }
      })
      setHistory(his.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getInprocess=async()=>{
    try {
      const pen=await axios.get("https://motorcycle-service-app.onrender.com/userbooking",{
        headers:{
          Authorization:`${window.localStorage.getItem("token")}`
        }
      })
      setPending(pen.data)
      // console.log(pen.data)

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='container'>
      <div className='row' style={{textAlign:"center"}}>
        <div className='col-12'>
          <h3>Inprocess</h3>
        </div>
      </div>
      <div className='row' >
        <div className='col-12 imprcs-container'>
            <table class="table">
              <thead className='table-dark'>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Vehicle Model</th>
                  <th scope="col">Service Type</th>
                  <th scope="col">Issue</th>
                  <th scope="col">Created At</th>
                </tr>
              </thead>
              <tbody>
              {
                  pending.map((item)=>{
                    return(
                      <tr>
                        <td>{item.name}</td>
                        <td>{item.model}</td>
                        <td>{item.type}</td>
                        <td>{item.issue}</td>
                        <td>{item.createdat}</td>
                    </tr>
                    )
                  })
                }
              </tbody>
            </table>
        </div>
      </div>
      <div className='row' style={{marginTop:"80px"}}>
        <div className='col-12' style={{textAlign:"center"}}>
          <h3>Completed</h3>
        </div>
      </div>
      <div className='row' >
        <div className='col-12 imprcs-container'>
            <table class="table">
              <thead className='table-dark'>
                <tr>
                  <th scope="col">Vehicle Model</th>
                  <th scope="col">Service Type</th>
                  <th scope="col">Serviced By</th>
                  <th scope="col">Service Amount</th>
                  <th scope="col">Reviews</th>
                </tr>
              </thead>
              <tbody>
                {
                  history.map((item)=>{
                    return(
                      <tr>
                        <td>{item.model}</td>
                        <td>{item.type}</td>
                        <td>{item.servicedby}</td>
                        <td>{item.amount}</td>
                        <td>
                          <Link to={`/portal/userreview/${item._id}`} className='btn btn-info btn-sm'>Post Your Reviews</Link>
                        </td>
                    </tr>
                    )
                  })
                }
              </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default UserHistory