import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Pages/Pages.css'
import loginlogo from '../images/login-logo.jpg'

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
                // console.log(user)
            } catch (error) {
                setDisable(false)
                alert("Incorrect username/password")
                console.log(error)
            }
        }
    })

  return (
    <div className='container-fluid'>
        {/* <div className='login-card'>
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
        </div> */}
        <div className='row'>
            <div className='col-4 login-leftside'>
                <div className='row'>
                    <div className='col-12'>
                        <img className='login-img' src={loginlogo}/>
                    </div>
                </div>
                <div className='row' style={{marginTop:"100px"}}>
                    <div className='col-12'  style={{textAlign:"center"}}>
                        <h4 style={{fontStyle:"italic"}}>A2 Service Private Limited</h4>
                        <p>India's largest chain of multibrand Automobile service workshop</p>
                        <p>Strong Network of 500+ operational FOFO workshops across 350+ cities</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12' style={{textAlign:"center"}}>
                        <h5>Contact us</h5>
                        <img className='social-media-logo' src='https://cdn.iconscout.com/icon/free/png-256/instagram-216-721958.png?f=avif&w=128' alt='social-media-logo'/>
                        <img className='social-media-logo' src='https://cdn.iconscout.com/icon/free/png-256/phone-2015-1100768.png?f=avif&w=128' alt='social-media-logo'/>
                        <img className='social-media-logo' src='https://cdn.iconscout.com/icon/free/png-256/gmail-30-722694.png?f=avif&w=128' alt='social-media-logo'/>
                    </div>
                </div>
            </div>
            <div className='col-8 login-rightside' style={{textAlign:"center",paddingTop:"100px"}}>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='login-heading'>Login</h3>
                    </div>
                </div>
                <div className='row' >
                    <div className='col-12' >
                        <form onSubmit={formik.handleSubmit}>
                            <div>
                                <label style={{marginLeft:"-290px"}} className='login-lbl'>Email</label><br></br>
                                <input placeholder='Enter your email here'  name='email' value={formik.values.email} onChange={formik.handleChange}  className='login-int' type='email'></input><br></br>
                                <span style={{color:"red"}}>{formik.errors.email}</span><br></br>
                                <label style={{marginLeft:"-250px"}}  className='login-lbl'>Password</label><br></br>
                                <input  placeholder='Enter your password here'  name='password' value={formik.values.password} onChange={formik.handleChange} type='password' className='login-int'></input><br></br>
                                <span style={{color:"red"}}>{formik.errors.password}</span><br></br>
                                <input style={{width:"350px",marginBottom:"10px"}} type='submit' value="Login" className='btn btn-success'></input>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                    <Link to='/forgot-password' className='btn btn-info login-btn'>Forgot Password</Link><br></br>
                    <Link to='/register' style={{marginTop:"0px"}} className='btn btn-primary  login-btn'>Create an account</Link><br></br>
                    </div>
                </div>
                <div className='row' style={{marginTop:"10px"}}>
                    <div className='col-6'>
                        <h6 style={{fontWeight:"bold"}}>User Credential</h6>
                        <p style={{margin:"0px"}}>Email:madan@gmail.com</p>
                        <p>Password:madan</p>
                    </div>
                    <div className='col-6'>
                    <h6 style={{fontWeight:"bold"}}>Admin Credential</h6>
                        <p style={{margin:"0px"}}>Email:kavin@gmail.com</p>
                        <p>Password:Kavin</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login