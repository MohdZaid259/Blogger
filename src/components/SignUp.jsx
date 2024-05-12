import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function SignUp() {
  const {register,handleSubmit} = useForm()
  const [error,setError]=useState('')
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const submit=(data)=>{
    setError('')
    console.log(data)
    navigate('/login')
  }
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className='flex justify-center items-center'>
        <div className='p-5 flex flex-col justify-center items-center border border-blue-500 min-h-60 w-1/3 rounded-md'>
          <span className='font-bold text-xl'>SignUp to create Account</span>
          <span className='text-orange-500'>Already have an Account?&nbsp;
            <Link className='text-blue-500' to='/login'>LogIn</Link>
          </span>
          {error && <span className='text-red-500'>{error}</span>}
          <div className='flex flex-col gap-1 p-5'>
            <label htmlFor="Email">Email</label>
            <input className='border rounded p-1' {...register('email',{required:true})} required type="text" />
            <label htmlFor="Password">Password</label>
            <input className='border rounded p-1' {...register('password',{required:true})} required type="password" />
            <button className='w-20 m-auto bg-blue-500 mt-4 p-1 rounded-md'>Submit</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default SignUp