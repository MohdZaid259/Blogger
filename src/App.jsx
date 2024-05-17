import React,{ useEffect, useState } from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import authService from './Appwrite/auth'
import { useDispatch } from 'react-redux'
import { login,logout } from './Store/authSlice'

function App() {
  const [loading,setLoading]=useState(true)
  const dispatch=useDispatch()

  useEffect(()=>{
    authService.currentUser()
      .then((userData)=>{
        userData ? dispatch(login(userData)) : dispatch(logout())
      }).catch((err)=>{
        throw err
      }).finally(()=>{
        setLoading(false)
      })
  },[])

    return (
        <div className=''>
        <Header/>
        {loading ? <div className='text-lg font-bold text-center'>Loading...</div> : <Outlet/>}
        <Footer/>
        </div>
  )
}

export default App