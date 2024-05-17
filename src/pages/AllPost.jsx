import React, { useEffect, useState } from 'react'
import service from '../Appwrite/config'
import { PostCard } from '../components'
import { Container } from '../components/index'

function AllPost() {
  const [post,setPost]=useState([])

  useEffect(()=>{
    service.getAllPost()
    .then((data)=>{
      setPost(data.documents)
    }).catch((err)=>{
      throw err
    })
  },[])
  console.log(post)

    return (
      <Container>
        {post.map((item)=>(
          <div key={item.$id}>
            <PostCard {...item}/>
          </div>
        ))}
      </Container>
    )
}

export default AllPost