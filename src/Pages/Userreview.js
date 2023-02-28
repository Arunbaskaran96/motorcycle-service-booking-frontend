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
                await axios.post(`http://localhost:8000/review/${params.id}`,value,{
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
    <div>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label>Your Review</label><br></br>
                <input name='review' value={formik.values.review} onChange={formik.handleChange}></input><br></br>
                <input type='submit' value="Submit"></input>
            </div>
        </form>
    </div>
  )
}

export default Userreview