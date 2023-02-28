import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../Pages/Pages.css'

function AddEmployer() {
    const nav=useNavigate()
    const[disable,setDisable]=useState(false)
      const formik=useFormik({
          initialValues:{
            name:"",
            email:"",
            qualification:"",
            mobile:"",
            city:"",
            role:"",
            salary:""
          },
          validate:(value)=>{
            let errors={}

            if(!value.name){
              errors.name="Please Enter Employer Name"
            }
            if(!value.email){
              errors.email="Please Enter Employer Email"
            }
            if(!value.qualification){
              errors.qualification="Please Enter Employer Qualification"
            }
            if(!value.mobile){
              errors.mobile="Please Enter Employer Mobile"
            }
            if(!value.city){
              errors.city="Please Enter Employer City"
            }
            if(!value.role){
              errors.role="Please Enter Employer Role"
            }
            if(!value.salary){
              errors.salary="Please Enter Employer Salary"
            }


            return errors
          },
          onSubmit:async(value)=>{
            try {
              setDisable(true)
              await axios.post("https://motorcycle-service-app.onrender.com/employer",value,{
                headers:{
                    Authorization:`${window.localStorage.getItem("token")}`
                }
              })
              alert("user added")
              nav("/adminportal/employers")

            } catch (error) {
              console.log(error)
            }
          }
      })
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-2'>
                    <Link to='/adminportal/adminhome' className='btn btn-primary '>Back</Link>
                </div>
            </div>
            <form onSubmit={formik.handleSubmit}>
            <div className='row emply-container' style={{marginTop:"20px"}} >
                <div className='col-4' style={{textAlign:"end"}}>
                    <label className='emp-lbl'>Name</label><br></br>
                    <label className='emp-lbl'>Email</label><br></br>
                    <label className='emp-lbl'>Mobile</label><br></br>
                    <label className='emp-lbl'>City</label><br></br>
                    <label className='emp-lbl'>Qualification</label><br></br>
                    <label className='emp-lbl'>Role</label><br></br>
                    <label className='emp-lbl'>Salary</label><br></br>
                </div>
                <div className='col-8'>
                    <input className='emp-int' type='text' name='name' value={formik.values.name} onChange={formik.handleChange}></input><span style={{color:"red"}}>{formik.errors.name}</span><br></br>
                    <input className='emp-int' type='text' name='email' value={formik.values.email} onChange={formik.handleChange}></input><span style={{color:"red"}}>{formik.errors.email}</span><br></br>
                    <input className='emp-int' type='text' name='mobile' value={formik.values.mobile} onChange={formik.handleChange}></input><span style={{color:"red"}}>{formik.errors.mobile}</span><br></br>
                    <input className='emp-int' type='text' name='city' value={formik.values.city} onChange={formik.handleChange}></input><span style={{color:"red"}}>{formik.errors.city}</span><br></br>
                    <input className='emp-int' type='text' name='qualification' value={formik.values.qualification} onChange={formik.handleChange}></input><span style={{color:"red"}}>{formik.errors.qualification}</span><br></br>
                    <input className='emp-int' type='text' name='role' value={formik.values.role} onChange={formik.handleChange}></input><span style={{color:"red"}}>{formik.errors.role}</span><br></br>
                    <input className='emp-int' type='text' name='salary' value={formik.values.salary} onChange={formik.handleChange}></input><span style={{color:"red"}}>{formik.errors.salary}</span><br></br>
                    <input disabled={disable} className='emp-int btn btn-success' type='submit' value='Create'></input><br></br>
                </div>
            </div>
            </form>
        </div>
    )
}

export default AddEmployer