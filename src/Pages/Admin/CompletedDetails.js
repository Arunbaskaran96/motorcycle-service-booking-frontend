import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../../Pages/Pages.css'

function CompletedDetails() {
    const[history,setHistory]=useState({})
    const params=useParams()

    useEffect(()=>{
        getHistory()
    },[])

    const getHistory=async()=>{
        try {
            const his=await axios.get(`https://motorcycle-service-app.onrender.com/completed/${params.id}`,{
                headers:{
                    Authorization:`${window.localStorage.getItem("token")}`
                }
            })
            // console.log(his.data.serviceid.book)
            setHistory(his.data)
            // console.log(his.data)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-2'>
                <Link to='/adminportal/adminhistory' className='btn btn-primary'>Back</Link>
            </div>
        </div>
        <div className='row history-details' style={{marginTop:"20px"}}>
            <div className='col-4' style={{textAlign:"end"}}>
                <h5 className='emp-det'>Name :</h5>
                <h5 className='emp-det'>Email :</h5>
                <h5 className='emp-det'>Contact :</h5>
                <h5 className='emp-det'>Service type :</h5>
                <h5 className='emp-det'>Vehicle Model :</h5>
                <h5 className='emp-det'>Serviced by :</h5>
                <h5 className='emp-det'>Service cost :</h5>
            </div>
            <div className='col-8'>
                <p>{history.name}</p>
                <p>{history.email}</p>
                <p>{history.contact}</p>
                <p>{history.type}</p>
                <p>{history.model}</p>
                <p>{history.servicedby}</p>
                <p>{history.amount}</p>
            </div>
        </div>
    </div>
  )
}

export default CompletedDetails