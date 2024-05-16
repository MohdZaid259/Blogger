import React, { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import service from '../Appwrite/config'
import { Container } from '../components/index'
import parse from 'html-react-parser'

function Post() {
  const [post,setPost]=useState(null)
  const navigate=useNavigate()
  const {slug}=useParams()
  const authData=useSelector(state=>state.auth.userData)

  useEffect(()=>{ // useCallback instead
    if(slug){
      service.getPost(slug)
        .then((post)=>{
          post? setPost(post): navigate('/')
        }).catch((err)=>{
          throw err
        })
    } else navigate('/')
  },[slug,navigate])

// ------------------------------------------------- using async-await
//   useEffect(()=>{
//     const fetch=async()=>{
//       if(slug){
//       const fetchPost =await service.getPost(slug)
//       fetchPost?setPost(fetchPost):navigate('/')
//       } else navigate('/')
//     }
//     fetch()
//   },[slug,navigate])
  
  function deletePost(){
    service.deletePost(post.$id)
      .then((status)=>{
        status? service.deleteFile(post.image):null
        navigate('/allpost') 
      })
  }
  const isAuther= post && authData ? post.userId===authData.$id : false

  if(!post) return <>Loading...</> 

  return (
    <Container>
      <div className='border p-5 border-red-500'>
        {isAuther && <>
        <Link to={`/editpost/${post.$id}`}><Button className=' absolute right-16 bg-green-500 ' variant='solid' bgColor="bg-green-500">Edit</Button></Link>
        <Button className='absolute right-10 bg-red-500' onClick={deletePost} variant='solid' bgColor="bg-green-500">Delete</Button>
        </>}
        <h1 className=" text-2xl font-bold">{post.title}</h1>
        <p className=''>{parse(post.content)}</p>
        <img className='w-1/2 float-right' src={service.getFilePreview(post.image)} alt={post.title} />
      </div>
    </Container>
  )
}

export default Post