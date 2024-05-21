import React from 'react'
import {Button} from "@nextui-org/react";
import { useDispatch } from 'react-redux'
import authService from '../Appwrite/auth'
import { logout as authLogout } from '../Store/authSlice'
import { useNavigate } from 'react-router-dom'

function LogOut() {
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const submit=async()=>{
    await authService.logOut()
    dispatch(authLogout())
    navigate('/')
  }
    return <Button className='font-bold' color="primary" variant="ghost" onClick={submit}>Logout</Button>    
}

export default LogOut