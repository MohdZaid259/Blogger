import React, { useEffect, useState } from 'react'
import { Container, PostCard } from '../components/index'
import service from '../Appwrite/config'
import authService from '../Appwrite/auth'

function MyPost() {
  const [posts,setposts]=useState([])
  const [user,setUser]=useState('')
  
  useEffect(()=>{
    authService.currentUser()
      .then((user)=>{
        user?setUser(user):''
      }).catch((err)=>{
        throw err
      })
    service.getAllPost()
      .then((posts)=>{
        posts?setposts(posts.documents):null
      }).catch((err)=>{
        throw err
      })
  },[])

  return (
    <Container>
      {posts.map((item)=>{
        if(item.userId == user.$id){
          return <div key={item.$id}><PostCard {...item}/></div>
        }
      })}
    </Container>
  )
}

export default MyPost