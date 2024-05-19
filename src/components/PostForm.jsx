import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { Button } from '@nextui-org/react';
import service from '../Appwrite/config'
import {Input,RTE} from '../components/index'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import noimage from '../Media/noimage.png'; 

function PostForm({post}) {
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
    console.log('submit')
    if (post) {
      const file = data.image[0] ? await service.uploadFile(data.image[0]) : noimage
      file ? service.deleteFile(post.image) : null
      const dbPost = await service.updatePost(post.$id, {
        ...data,
        image: file ? file.$id : noimage,
      })
      console.log('dbpost',dbPost)
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
    <div className='w-full border border-blue-900 rounded-lg font-auth max-w-3xl mx-auto px-10 py-5'>
      <form onSubmit={handleSubmit(submit)}>
        <div className="w-full px-2 flex flex-col">
          <Input className='border rounded p-1 mb-3' label='Title' type="text" {...register('title',{required:true})} />
          <Input className='border rounded p-1 mb-3 bg-inherit' disabled='disabled' label='Slug' type="text" 
            {...register('slug',{required:true})} />
          <RTE control={control} label='Content' name='content' defaultValue={getValues('content')}/>
          <Input className='border rounded p-1 mb-3' label='Image' type='file' {...register('image')}/>
          {post && <img src={post.image} alt={post.title} className='rounded-lg'/>}
          <Button className='font-bold text-lg' type='submit' color='primary'>{post?'Update':'Publish'}</Button>
        </div>
      </form>
    </div>
  )
}

export default PostForm