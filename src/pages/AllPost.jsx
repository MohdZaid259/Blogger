import React, { useEffect, useState } from 'react'
import service from '../Appwrite/config'
import { PostCard } from '../components'

function AllPost() {
  const [post,setPost]=useState([])
  useEffect(()=>{
    service.getAllPost()
    .then((posts)=>{
      posts? setPost(posts.documents):null
    }).finally(()=>{
      console.log('all posts fetched!')
    })
  },[])

  return (
    <div>
      {post.map((item)=>(
        <div key={item}>
          <PostCard {...post}/>
        </div>
      ))}
    </div>
  )
}

export default AllPost