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

  if(!post) return <div className='text-xl font-bold text-center'>Loading...</div> 

  return (
    <Container>
      <div className='border border-black rounded-lg w-full p-5 grid grid-cols-2'>
        <div>
        <h1 className="text-2xl ml-5 font-bold font-heading">{post.title}</h1>
        <p className=' font-content text-3xl p-5'>{post.content? parse(post.content) :''}</p>
        </div>
        <div>
        <img className='rounded-lg' src={service.getFilePreview(post.image)} alt={post.title} />
        {isAuther && <>
        <Link to={`/editpost/${post.$id}`}><Button className='font-auth rounded-md bg-black absolute top-16 right-32 text-green-400 border-2 border-green-500 hover:bg-green-800 hover:text-white' variant='solid'>Edit</Button></Link>
        <Button className='font-auth rounded-md absolute top-16 right-10 bg-black border-2 text-red-400 border-red-400 hover:bg-red-700 hover:text-white' onClick={deletePost} variant='solid'>Delete</Button>
        </>}
        </div>
      </div>
    </Container>
  )
}

export default Post