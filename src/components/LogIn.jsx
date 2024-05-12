import React,{useState} from 'react'
import {Link} from 'react-router-dom' 
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function LogIn() {
  const {register,handleSubmit} = useForm()
  const [error,setError]=useState('')
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const submit=(data)=>{
    setError('')
    console.log(data)
    navigate('/')
  }
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className='flex justify-center items-center'>
        <div className='p-5 flex flex-col justify-center items-center border border-blue-500 min-h-60 w-1/3 rounded-md'>
          <span className='font-bold text-xl'>Login to your Account</span>
          <span className='text-orange-500'>Don't have an Account?&nbsp;
            <Link className='text-blue-500' to='/signup'>SignUp</Link>
          </span>
          {error && <span className='text-red-500'>{error}</span>}
          <div className='flex flex-col gap-1 p-5'>
            <label htmlFor="Name">Full Name</label>
            <input className='border rounded p-1' {...register('name',{required:true})} type="text" />
            <label htmlFor="Email">Email</label>
            <input className='border rounded p-1' {...register('email',{required:true})} type="text" />
            <label htmlFor="Password">Password</label>
            <input className='border rounded p-1' {...register('password',{required:true})} type="password" />
            <button className='w-20 m-auto bg-blue-500 mt-4 p-1 rounded-md'>Submit</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default LogIn