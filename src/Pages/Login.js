import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Pages/Pages.css'

function Login() {
    const nav=useNavigate()
    const[user,setUser]=useState({})
    const [disable,setDisable]=useState(false)
    const formik=useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validate:(value)=>{
            let errors={}

            if(!value.email){
                errors.email="Please Enter Your Email Id"
            }

            if(!value.password){
                errors.password="Please Enter Your Password"
            }

            return errors
        },
        onSubmit:async(value)=>{
            try {
                setDisable(true)
                const login= await axios.post("https://motorcycle-service-app.onrender.com/login",value)
                window.localStorage.setItem("token",login.data.token)
                if(login.data.user.role==="user"){
                    nav("/portal/home")
                }else{
                    nav("/adminportal/adminhome")
                }
                console.log(user)
            } catch (error) {
                setDisable(false)
                alert("Incorrect username/password")
                console.log(error)
            }
        }
    })

  return (
    <div className='login-container'>
        <div className='login-card'>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label>Email</label><br></br>
                    <input name='email' value={formik.values.email} onChange={formik.handleChange}  className='int' type='email'></input><br></br>
                    <span style={{color:"red"}}>{formik.errors.email}</span><br></br>
                    <label>Password</label><br></br>
                    <input name='password' value={formik.values.password} onChange={formik.handleChange} type='password' className='int'></input><br></br>
                    <span style={{color:"red"}}>{formik.errors.password}</span><br></br>
                    <input disabled={disable} style={{margin:'20px 0px',width:'300px'}} className='btn btn-success' type='submit' value='Login'></input>
                </div>
            </form>
            <div className='login-btn'>
            <Link to='/forgot-password' className='btn btn-info'>Forgot Password</Link><br></br>
            <Link to='/register' className='btn btn-primary'>Create an account</Link><br></br>
            </div>
        </div>
    </div>
  )
}

export default Login