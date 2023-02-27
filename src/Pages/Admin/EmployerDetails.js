import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function EmployerDetails() {
    const[employer,setEmployer]=useState({})
    const params=useParams()

    useEffect(()=>{
        getEmployer()
    },[])

    const getEmployer=async()=>{
        try {
            const emp=await axios.get(`http://localhost:8000/employer/${params.id}`,{
                headers:{
                    Authorization:`${window.localStorage.getItem("token")}`
                }
            })
            setEmployer(emp.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-2'>
                <Link to='/adminportal/employers' className='btn btn-primary'>Back</Link>
            </div>
        </div>
        <div className='row emp-conatiner'>
            <div className='col-4' style={{textAlign:'end'}}>
                <h5 className=' emp-label'>Name :</h5>
                <h5 className=' emp-label'>Email :</h5>
                <h5 className=' emp-label'>Mobile :</h5>
                <h5 className=' emp-label'>City :</h5>
                <h5 className=' emp-label'>Qualification :</h5>
                <h5 className=' emp-label'>Role :</h5>
                <h5 className=' emp-label'>Salary :</h5>
            </div>
            <div className='col-4'>
                <p>{employer.name}</p>
                <p>{employer.email}</p>
                <p>{employer.mobile}</p>
                <p>{employer.city}</p>
                <p>{employer.qualification}</p>
                <p>{employer.role}</p>
                <p>{employer.salary}</p>
            </div>
        </div>
    </div>
  )
}

export default EmployerDetails