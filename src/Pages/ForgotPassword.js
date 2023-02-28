import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import '../Pages/Pages.css'

function ForgotPassword() {
    const formik=useFormik({
        initialValues:{
            email:""
        },
        validate:()=>{},
        onSubmit:async(value)=>{
            await axios.post("https://motorcycle-service-app.onrender.com/forgot",value)
        }
    })
  return (
    <div className='forgot-container'>
        <div className='forgot-minicontainer'>
            <form onSubmit={formik.handleSubmit}>
            <label>Email</label><br></br>
            <input style={{width:"300px",borderRadius:"10px"}} type='email' name='email' value={formik.values.email} onChange={formik.handleChange}></input><br></br>
            <input style={{marginTop:"15px"}} className='btn btn-primary btn-sm' type='submit' value="Submit"></input>
            </form>
        </div>
    </div>
  )
}

export default ForgotPassword