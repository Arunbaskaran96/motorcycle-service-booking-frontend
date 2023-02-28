import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserCard() {
    const[user,setUser]=useState({})
    useEffect(()=>{
        getUser()
    },[])

    const getUser=async()=>{
        try {
            const users=await axios.get("https://motorcycle-service-app.onrender.com/usercard",{
                headers:{
                    Authorization:`${window.localStorage.getItem("token")}`
                }
            })
            setUser(users.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>{user.name}</div>
  )
}

export default UserCard