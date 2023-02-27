import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
  const nav=useNavigate()
  const[disable,setDisable]=useState(false)
    const formik=useFormik({
        initialValues:{
          name:"",
          email:"",
          password:"",
          mobile:"",
          city:""
        },
        validate:(value)=>{
          let errors={}

          if(!value.name){
            errors.name="Please Enter Your Name"
          }
          if(!value.email){
            errors.email="Please Enter Your Email"
          }
          if(!value.password){
            errors.password="Please Enter Your Password"
          }
          if(!value.mobile){
            errors.mobile="Please Enter Your Mobile"
          }
          if(!value.city){
            errors.city="Please Enter Your City"
          }

          return errors
        },
        onSubmit:async(value)=>{
          try {
            setDisable(true)
            await axios.post("http://localhost:8000/register",value)
            alert("user added")
            nav("/")
          } catch (error) {
            console.log(error)
          }
        }
    })
  return (
    <>
    <div>
      <Link className='btn btn-info' to='/'>Back</Link>
    </div>
    <div className='reg-container'>
      <form onSubmit={formik.handleSubmit}>
        <div className='reg-card'>
          <div>
            <label>Name</label><br></br>
            <input name='name' value={formik.values.name} onChange={formik.handleChange} className='int'></input><span style={{color:"red"}}>{formik.errors.name}</span><br></br>
            <label>Email</label><br></br>
            <input name='email' value={formik.values.email}  onChange={formik.handleChange} className='int'></input><span style={{color:"red"}}>{formik.errors.email}</span><br></br>
            <label>Password</label><br></br>
            <input name='password' value={formik.values.password}  onChange={formik.handleChange} className='int'></input><span style={{color:"red"}}>{formik.errors.password}</span><br></br>
            <label>Mobile</label><br></br>
            <input name='mobile' value={formik.values.mobile}  onChange={formik.handleChange} className='int'></input><span style={{color:"red"}}>{formik.errors.mobile}</span><br></br>
            <label>City</label><br></br>
            <input name='city'  value={formik.values.city}  onChange={formik.handleChange} className='int'></input><span style={{color:"red"}}>{formik.errors.city}</span><br></br>
            <input disabled={disable} style={{margin:"15px 0px",width:"300px"}} className='btn btn-success' type='submit' value='Create'></input>
          </div>
        </div>
      </form>
    </div>
</>
  )
}

export default Register