import React, { useEffect, useState } from 'react'
import service from '../Appwrite/config'
import { PostCard } from '../components'
import { Container } from '../components/index'

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
      <Container>
        {post.map((item)=>(
          <div key={item.$id}>
            <PostCard {...post}/>
          </div>
        ))}
      </Container>
    )
}

export default AllPost