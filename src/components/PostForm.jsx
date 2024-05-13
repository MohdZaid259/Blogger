import React from 'react'
import {Input} from '../components/index'

function PostForm() {
  return (
    <div>
      <Input className='border rounded p-1' label='Title' type="text" />
      <Input className='border rounded p-1' label='Slug' type="text" />
    </div>
  )
}

export default PostForm