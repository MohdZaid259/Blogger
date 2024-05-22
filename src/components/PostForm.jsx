import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { Button } from '@nextui-org/react';
import service from '../Appwrite/config'
import {Input,RTE} from '../components/index'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import noimage from '../Media/noimage.png';

function PostForm({post}) {
  const [error,setError]=useState('')
  const { register, handleSubmit, watch, control, setValue, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
      }
    });
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    try {
      if (post) {
        const file = data.image[0] ? await service.uploadFile(data.image[0]) : noimage
        console.log(post.image)
        file ? service.deleteFile(post.image) : null
        const dbPost = await service.updatePost(post.$id, {
          ...data,
          image: file ? file.$id : noimage,
        })
        dbPost? navigate(`/post/${dbPost.$id}`) : null    
      } else {
        const file = data.image[0] ? await service.uploadFile(data.image[0]) : noimage
        if (file) {
          data.image = file ? file.$id : noimage;
          const dbPost = await service.createPost({
            ...data,
            userId: userData.$id,
          });
          dbPost? navigate(`/post/${dbPost.$id}`) : null
        }
      }
    } catch (error) {
      setError(error.message)
    }
  };

  const slugTransform=useCallback((value)=>{
    if(value && typeof(value)==='string'){
      const slug = value.toLowerCase().replace(/ /g,'-')
      return slug
    } return ''
  },[])

  useEffect(()=>{ // realtime replacement
    setValue('slug',slugTransform(getValues('title')))
    const subscribe = watch((value,{name})=>{
      if(name==='title'){
        setValue('slug',slugTransform(value.title))
      }
    })
    return ()=>{
      subscribe.unsubscribe()
    }
  },[watch,slugTransform,setValue])

  return (
    <div className='w-full border border-blue-900 dark:border-white rounded-lg font-auth max-w-3xl mx-auto p-2 pt-5 sm:p-3 sm:pt-5 md:p-5 lg:p-10'>
      <form onSubmit={handleSubmit(submit)}>
        <div className="w-full px-2 flex flex-col">
          <Input className='border ml-5 w-full rounded p-1 mb-3' label='Title' type="text" {...register('title',{required:true})}/>
          <Input className='border ml-5 rounded w-full p-1 mb-3' disabled='disabled' label='Slug' type="text" 
            {...register('slug',{required:true})} />
          {error && <div className='mt-2 text-xs text-red-500'>{error}</div>}
          <RTE control={control} className='mt-5' label='Content' name='content' defaultValue={getValues('content')}/>
          <div className='my-5'><Input className='border ml-5 rounded w-full p-1' label='Image' type='file' {...register('image')}/></div>
          {post && <img src={post.image} alt={post.title} className='rounded-lg'/>}
          <Button className='font-bold rounded-md tracking-wider text-lg' type='submit' color='primary'>{post?'Update':'Publish'}</Button>
        </div>
      </form>
    </div>
  )
}

export default PostForm