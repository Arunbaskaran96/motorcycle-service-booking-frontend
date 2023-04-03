import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Userreview() {
    const params=useParams()
    const nav=useNavigate()
    const formik=useFormik({
        initialValues:{
            review:""
        },
        validate:()=>{},
        onSubmit:async(value)=>{
            try {
                await axios.post(`https://motorcycle-service-app.onrender.com/review/${params.id}`,value,{
                    headers:{
                        Authorization:`${window.localStorage.getItem("token")}`
                    }
                })
                nav("/portal/userhistory")
            } catch (error) {
                console.log(error)
            }
        }
    })
  return (
    <div className='userreview-container'>
        <form onSubmit={formik.handleSubmit}>
            <div className='userreview-card'>
                <label className='userreview-heading'>Your Review</label><br></br>
                <input  className='userreview-int' name='review' value={formik.values.review} onChange={formik.handleChange}></input><br></br>
                <input className='btn btn-success ' style={{marginTop:"10px"}} type='submit' value="Submit"></input>
            </div>
        </form>
    </div>
  )
}

export default Userreview