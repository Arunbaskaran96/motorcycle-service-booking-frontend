import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Pages/Pages.css'

function Bookin() {
  const [disable,setDisable]=useState(false)
  const nav=useNavigate()
  const formik=useFormik({
    initialValues:{
      name:"",
      email:"",
      contact:"",
      model:"",
      type:"",
      issue:""
    },
    validate:(value)=>{
      let errors={}


      if(!value.name){
        errors.name="Please Enter Your Name"
      }
      if(!value.email){
        errors.email="Please Enter Your Email"
      }
      if(!value.contact){
        errors.contact="Please Enter Your Contact"
      }
      if(!value.model){
        errors.model="Please Enter Your Model"
      }
      if(!value.type){
        errors.name="Please Enter Your Type"
      }
      if(!value.issue){
        errors.issue="Please Enter Your Issue"
      }

      return errors
    },
    onSubmit:async(value)=>{
      setDisable(true)
      await axios.post("https://motorcycle-service-app.onrender.com/booking",value,{
        headers:{
          Authorization:`${window.localStorage.getItem("token")}`
        }
      })
      alert("Booked")
      nav("/portal/home")
    }
  })
  return (
    <div style={{backgroundColor:"whitesmoke"}}>
        <Link to='/portal/home' className='btn btn-info'>Back</Link>
        <div className='booking-container'>
          <form onSubmit={formik.handleSubmit}>
            <div className='booking-card'>
              <label>Name</label><br></br>
              <input name='name' value={formik.values.name} onChange={formik.handleChange} className='int' type='text'></input><span style={{color:"red"}}>{formik.errors.name}</span><br></br>
              <label>Email</label><br></br>
              <input name='email' value={formik.values.email} onChange={formik.handleChange} className='int'  type='email'></input><span style={{color:"red"}}>{formik.errors.email}</span><br></br>
              <label>Contact</label><br></br>
              <input name='contact' value={formik.values.contact} onChange={formik.handleChange} className='int'  type='number'></input><span style={{color:"red"}}>{formik.errors.contact}</span><br></br>
              <label>Vehicle Model</label><br></br>
              <input name='model' value={formik.values.model} onChange={formik.handleChange} className='int'  type='text'></input><span style={{color:"red"}}>{formik.errors.model}</span><br></br>
              <label>Service Type</label><br></br>
              <select name='type' value={formik.values.type} onChange={formik.handleChange}  className='int' >
                <option>---select type---</option>
                <option>General Service</option>
                <option>Hybrid Services</option>
                <option>Water Washe</option>
                <option>Tyre change</option>
                <option>Oil change</option>
                <option>Our Special service</option>

              </select><span style={{color:"red"}}>{formik.errors.type}</span><br></br>
              <label>About Issues</label><br></br>
              <input name='issue' value={formik.values.issue} onChange={formik.handleChange} className='int' style={{height:"100px"}} ></input><span style={{color:"red"}}>{formik.errors.issue}</span><br></br>
              <input style={{margin:'10px 0px'}} className='btn btn-primary' type='submit' value='Book'></input>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Bookin