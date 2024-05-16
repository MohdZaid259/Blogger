import React from 'react'
import { PostForm } from '../components'
import { Container } from '../components/index'
import { useParams } from 'react-router-dom'

function EditPost() {
  const {slug}=useParams()
  
  return (
    <Container>
    <PostForm/>
    </Container>
  )
}

export default EditPost