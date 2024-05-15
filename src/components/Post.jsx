import React from 'react'
import { Button } from '@nextui-org/react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import service from '../Appwrite/config'

function Post({post}) {
  const navigate=useNavigate()
  const authData=useSelector(state=>state.auth.userData)

  function deletePost(){
    service.deletePost(post.$id)
      .then((status)=>{
        status? service.deleteFile(post.image):null
        navigate('/allpost') 
      })
  }
  const isAuther= post && authData ? post.userId===authData.$id : false

  return (
    <div>
      <img src={service.getFilePreview(post.image)} alt={post.title} />
      {isAuther && <>
      <Link to={`/editpost/${post.$id}`}><Button variant='solid' bgColor="bg-green-500">Edit</Button></Link>
      <Button onClick={deletePost} variant='solid' bgColor="bg-green-500">Delete</Button>
      </>}
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}

export default Post