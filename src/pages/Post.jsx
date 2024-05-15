import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Post() {
  const userData=useSelector(state=>state.auth.status)
  const [post,setPost]=useState(null)
  const navigate=useNavigate()
  
  return (
    <div>

    </div>
  )
}

export default Post