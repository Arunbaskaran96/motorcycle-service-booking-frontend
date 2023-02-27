import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Ifcompleted() {
    const nav=useNavigate()
    const params=useParams()
    const formik=useFormik({
        initialValues:{
            status:"Completed",
            amount:"",
            servicedby:""
        },

        validate:(value)=>{
            let errors={}
            
            if(!value.amount){
                errors.amount="Please Enter Service Amount"
            }
            if(!value.servicedby){
                errors.servicedby="Please Enter Service By"
            }

            return errors
        },
        onSubmit:async(values)=>{
            await axios.put(`http://localhost:8000/completed/${params.id}`,values,{
                headers:{
                    Authorization:`${window.localStorage.getItem("token")}`
                }
            })
            nav("/adminportal/adminhome")
        }
    })
  return (
        <div className='container'>
            <div className='row'>
                <div className='col-2'>
                    <Link to='/adminportal/adminhome' className='btn btn-primary'>Back</Link>
                </div>
            </div>
            <form onSubmit={formik.handleSubmit}>
            <div className='row if-compltd'style={{padding:"10px"}}>
                <div className='col-4' style={{textAlign:"end"}}>
                    <label className='if-cmp-lbl'>Service Amount :</label><br></br>
                    <label className='if-cmp-lbl'>Serviced By :</label><br></br>
                </div>
                <div className='col-8'>
                    <input className='if-cpm-int' name='amount' value={formik.values.amount} onChange={formik.handleChange}></input><span style={{color:"red"}}>{formik.errors.amount}</span><br></br>
                    <input className='if-cpm-int' name='servicedby' value={formik.values.servicedby} onChange={formik.handleChange}></input><span style={{color:"red"}}>{formik.errors.servicedby}</span><br></br>
                    <input style={{marginBottom:"10px"}} className='btn btn-success btn-sm' type='submit' value='submit'></input><br></br>
                </div>
            </div>
            </form>
        </div>

  )
}

export default Ifcompleted