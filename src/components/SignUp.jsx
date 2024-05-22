import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import {Input} from './index'
import { Button } from '@nextui-org/react';
import authService from '../Appwrite/auth'

function SignUp() {
  const {register,handleSubmit} = useForm()
  const [error,setError]=useState('')
  const navigate=useNavigate()

  const submit = async(data)=>{
    try {
      const user = await authService.signUp(data)
      if(user) navigate('/login')
    setError('')
    } catch (error) {
      setError(error.message)
    }
  }
  
  return (
    <form className='flex flex-1 h-full flex-col justify-center' onSubmit={handleSubmit(submit)}>
      <div className='flex font-auth justify-center items-center'>
        <div className='py-5 flex flex-col justify-center items-center border border-blue-500 max-w-md min-h-60 w-full rounded-md mx-5 '>
          <span className='font-bold text-lg sm:text-xl'>SignUp to create Account</span>
          <span className='text-gray-500 text-sm sm:text-md'>Already have an Account?&nbsp;
            <Link className='hover:underline text-blue-500' to='/login'>LogIn</Link>
          </span>
          {error && <span className='mt-2 text-xs text-red-500'>{error}</span>}
          <div className='flex flex-col gap-4 pt-5 pb-3'>
            <Input type="text" label='Name' className='border ml-11 rounded p-1' {...register('name',{required:true})}/>
            <Input type="text" label='Email' className='border ml-12 rounded p-1' {...register('email',{required:true})}/>
            <Input type="password" label='Password' className='border ml-3  rounded p-1' {...register('password',{required:true})}/>
            <Button type='submit' color='primary' className='w-20 m-auto bg-blue-500 mt-4 p-1 rounded-md'>Submit</Button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default SignUp