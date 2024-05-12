import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import service from '../Appwrite/config'
import {PostCard} from '../components/index'

function Home() {
  const [post,setPost]=useState([])
  const authStatus=useSelector(state=>state.auth.status)
  
  useEffect(()=>{
    service.getAllPost()
      .then((data)=>{
        // console.log(data)
        setPost(data)
      })
  },[])

  return authStatus ? <>
    {post.map((post)=>(
      <div key={post.$id}>
        <PostCard {...post}/>
      </div>
    ))}
  </> : <span className='flex justify-center text-xl font-bold '>Login to Read Posts !!!</span> 
}

export default Home