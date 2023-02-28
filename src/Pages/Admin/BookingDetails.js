import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../../Pages/Pages.css"

function BookingDetails() {
    const params=useParams()
    const [book,setBook]=useState({})
    const [isloading,setLoading]=useState(true)

    useEffect(()=>{
        getBooking()
    },[])

    const getBooking=async()=>{
        try {
            const booking=await axios.get(`https://motorcycle-service-app.onrender.com/bookingdetail/${params.id}`,{
                headers:{
                    Authorization:`${window.localStorage.getItem("token")}`
                }
            })
            setBook(booking.data)
            // console.log(booking.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    isloading ? 
    <div class="text-center">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
   </div>:
   (
    <div className='container'>
        <div className='row'>
            <div className='col-2'>
                <Link to='/adminportal/adminhome' className='btn btn-primary '>Back</Link>
            </div>
        </div>
        <div className='row  bookdet-container' >
            <div className='col-4' style={{textAlign:"end"}}>
                <h5 className='bookindet-label'>Name :</h5>
                <h5 className='bookindet-label'>Email :</h5>
                <h5 className='bookindet-label'>Contact :</h5>
                <h5 className='bookindet-label'>Service Type :</h5>
                <h5 className='bookindet-label'>Vehicle model :</h5>
                <h5 className='bookindet-label'>Booking on :</h5>
                <h5 className='bookindet-label'>Issue :</h5>
            </div>
            <div className='col-6'>
                <p>{book.name}</p>
                <p>{book.email}</p>
                <p>{book.contact}</p>
                <p>{book.type}</p>
                <p>{book.model}</p>
                <p>{book.createdat}</p>
                <p>{book.issue}</p>
                <Link to={`/adminportal/ifcompleted/${params.id}`} style={{marginBottom:"15px"}} className='btn btn-success'>If Completed</Link>
            </div>
        </div>
    </div>

   )
  )
}

export default BookingDetails