import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import service from '../Appwrite/config'
import {PostCard} from '../components/index'
import { Container } from '../components/index'

function Home() {
  const [post,setPost]=useState([])
  const authStatus=useSelector(state=>state.auth.status)
  
  useEffect(()=>{
    service.getAllPost()
    .then((data)=>{
      setPost(data.documents)
    }).catch((err)=>{
      throw err
    })
  },[])

return authStatus ? <>
  {post.length===0?<div className='flex justify-center text-xl font-bold '>Fetching Data...</div>:''}
  <Container>
    {post.map((item)=>(
      <div key={item.$id}>
        <PostCard {...item}/>
      </div>
    ))}
  </Container>
  </> : <span className='flex justify-center text-xl font-bold '>Login/Signup to Read !!!</span> 
}

export default Home
