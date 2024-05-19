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
    console.log(data)
    try {
      const user = await authService.signUp(data)
      if(user) navigate('/login')
    setError('')
    } catch (error) {
      setError(error)
    }
  }
  
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className='flex font-auth justify-center items-center'>
        <div className='p-5 flex flex-col justify-center items-center border border-blue-500 min-h-60 w-1/3 rounded-md'>
          <span className='font-bold text-xl'>SignUp to create Account</span>
          <span className='text-gray-500'>Already have an Account?&nbsp;
            <Link className='hover:underline text-blue-500' to='/login'>LogIn</Link>
          </span>
          {error && <span className='text-red-500'>{error}</span>}
          <div className='flex flex-col gap-1 p-5'>
            <Input type="text" label='Name' className='border rounded p-1' {...register('name',{required:true})}/>
            <Input type="text" label='Email' className='border rounded p-1' {...register('email',{required:true})}/>
            <Input type="password" label='Password' className='border rounded p-1' {...register('password',{required:true})}/>
            <Button type='submit' color='primary' className='w-20 m-auto bg-blue-500 mt-4 p-1 rounded-md'>Submit</Button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default SignUp