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

  // if(post.length===0){
  //   return <div className='text-center text-lg font-bold'>No posts yet!</div>
  // }else{
  //   return (
  //     <Container>
  //       {post.map((item)=>(
  //         <div key={item.$id}>
  //           <PostCard {...post}/>
  //         </div>
  //       ))}
  //     </Container>
  //   )
  // }
  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {post.map((post)=>(
            <div key={post.$id} className='p-2 w-1/4'>
              <PostCard {...post}/>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPost