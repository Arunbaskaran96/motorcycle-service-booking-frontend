import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Adminhistory() {
    const[history,setHistory]=useState([])
    const[disable,setDisable]=useState(true)
    const[isloading,setLoading]=useState(true)

    useEffect(()=>{
        getHistory()
    },[])

    const getHistory=async()=>{
        try {
            const his=await axios.get("https://motorcycle-service-app.onrender.com/completedbookingdetails",{
                headers:{
                    Authorization:`${window.localStorage.getItem("token")}`
                }
            })
            setHistory(his.data)
            setDisable(false)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12' style={{textAlign:"center"}}>
                <h5>Completed Service History</h5>
            </div>
        </div>
        <div className='row' style={{marginTop:"50px"}}>
            <div className='col-12  table-detail'>
                <table class="table">
                    <thead className=' table-dark'>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Service Type</th>
                            <th scope="col">Service Amount</th>
                            <th scope="col">Serviced By</th>
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
                                history.map((item)=>{
                                    return(
                                        <tr>
                                            <td>{item.name}</td>
                                            <td>{item.type}</td>
                                            <td>{item.amount}</td>
                                            <td>{item.servicedby}</td>
                                            <td>
                                                <Link to={`/adminportal/historydetails/${item._id}`} className='btn btn-success btn-sm'>View</Link>
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

export default Adminhistory

