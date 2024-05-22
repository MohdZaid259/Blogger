import React,{useState} from 'react'
import {Link} from 'react-router-dom' 
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login as authLogin } from '../Store/authSlice'
import {Input} from './index'
import { Button } from '@nextui-org/react';
import authService from '../Appwrite/auth'

function LogIn() {
  const {register,handleSubmit} = useForm()
  const [error,setError]=useState('')
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const submit = async(data)=>{
    try {
      const session = await authService.logIn(data)
      console.log(session) 
      if (session) {
        const user= await authService.currentUser()
        user ? dispatch(authLogin(user)) : null
        navigate('/')
      }
      setError('')  
    } catch (error) {
        setError(error.message)
    }
  }

  return (
    <form className='flex flex-1 h-full flex-col justify-center' onSubmit={handleSubmit(submit)}>
      <div className='flex font-auth justify-center items-center'>
        <div className='p-5 flex flex-col justify-center items-center border border-blue-500 max-w-md min-h-60 w-4/5 rounded-md'>
          <span className='font-bold text-lg sm:text-xl'>Login to your Account</span>
          <span className='text-gray-500 text-sm sm:text-md'>Don't have an Account?&nbsp;
            <Link className='hover:underline text-blue-500' to='/signup'>SignUp</Link>
          </span>
          {error && <span className='mt-2 text-xs text-red-500'>{error}</span>}
          <div className='flex flex-col gap-4 p-5 pb-3'>
            <Input type="text" label='Email' className='border w-3/4 sm:w-full ml-16 rounded p-1' {...register('email',{required:true})}/>
            <Input type="password" label='Password' className='border ml-7 w-3/4 sm:w-full rounded p-1' {...register('password',{required:true})}/>
            <Button type='submit' color='primary' className='w-20 m-auto bg-blue-500 mt-4 p-1 rounded-md'>Submit</Button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default LogIn