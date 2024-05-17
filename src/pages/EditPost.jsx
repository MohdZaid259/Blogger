import React, { useEffect, useState } from 'react'
import { PostForm } from '../components'
import { Container } from '../components/index'
import { useNavigate, useParams } from 'react-router-dom'
import service from '../Appwrite/config'

function EditPost() {
  const [post,setPost]=useState(null)
  const {slug}=useParams()
  const navigate=useNavigate()

  useEffect(()=>{
    if(slug){
      service.getPost(slug)
        .then((post)=>{
          setPost(post)
        }).catch((err)=>{
          throw err
        })
    } else navigate('/')
  },[slug,navigate])

  if(post){
    return (
      <Container>
      <PostForm post={post}/>
      </Container>
    )
  }
}

export default EditPost