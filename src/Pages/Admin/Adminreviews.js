import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Adminreviews() {
    const[review,setReview]=useState([])

    useEffect(()=>{
        getReviews()
    },[])

    const getReviews=async()=>{
        try {
            const rev=await axios.get("https://motorcycle-service-app.onrender.com/reviews")
            setReview(rev.data)
            console.log(rev.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12'>
                <table class="table">
                    <thead className='table-dark'>
                        <tr>
                            <th scope="col">Customer Name</th>
                            <th scope="col">ServiceID</th>
                            <th scope="col">Service By</th>
                            <th scope="col">Review</th>
                        </tr>
                    </thead>
                    {
                        review.map((item)=>{
                            return(
                                <tbody>
                                    <tr>
                                        <td>{item.serviceid.name}</td>
                                        <td>{item.serviceid._id}</td>
                                        <td>@{item.serviceid.servicedby}</td>
                                        <td>{item.review}</td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    </div>
  )
}

export default Adminreviews