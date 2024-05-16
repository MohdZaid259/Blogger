import React from 'react'
import { Button } from '@nextui-org/react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import service from '../Appwrite/config'
import { Container } from '../components/index'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser'

function Post({post}) {
  const navigate=useNavigate()
  const authData=useSelector(state=>state.auth.userData)
  const {slug}=useParams()

  function deletePost(){
    service.deletePost(post.$id)
      .then((status)=>{
        status? service.deleteFile(post.image):null
        navigate('/allpost') 
      })
  }
  const isAuther= post && authData ? post.userId===authData.$id : false

  return (
    <Container>
    <div>
      <img src={service.getFilePreview(post.image)} alt={post.title} />
      {isAuther && <>
      <Link to={`/editpost/${post.$id}`}><Button className='absolute right-10 top-10 ' variant='solid' bgColor="bg-green-500">Edit</Button></Link>
      <Button className='absolute right-5 top-5' onClick={deletePost} variant='solid' bgColor="bg-green-500">Delete</Button>
      </>}
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p>{parse(post.content)}</p>
    </div>
    </Container>
  )
}

export default Post