import React from 'react'
import { useForm } from "react-hook-form";
import { Button } from '@nextui-org/react';
import service from '../Appwrite/config'
import {Input,RTE} from '../components/index'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm({post}) {
  const { register, handleSubmit, watch, control } =
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
    if (post) {
      const file = data.image[0] ? await service.uploadFile(data.image[0]) : null
      file ? service.deleteFile(post.image) : null
      const dbPost = await service.updatePost(post.$id, {
        ...data,
        image: file ? file.$id : null,
      })
      dbPost? navigate(`/${dbPost.$id}`) : null
    } else {
      const file = data.image[0] ? await service.uploadFile(data.image[0]) : null;
      if (file) {
        data.featuredImage = file.$id;
        const dbPost = await appwriteservice.createPost({ // slug missing
          ...data,
          userId: userData.$id,
        });
        dbPost? navigate(`/${dbPost.$id}`) : null
      }
    }
  };

  return (
    <div className='w-full max-w-7xl mx-auto p-5'>
      <form onSubmit={handleSubmit(submit)} className='flex flex-wrap"'>
        <div className="w-full px-2 flex flex-col">
          <Input className='border rounded p-1 mb-3' label='Title' type="text" {...register('title',{required:true})} />
          <Input className='border rounded p-1 mb-3' label='Slug' type="text" {...register('slug',{required:true})} />
          <RTE control={control} label='Content' name='Content'/>
          <Input className='border rounded p-1 mb-3' label='Image' type='file' {...register('image',{required:true})}/>
          {post && <img src={post.image} alt={post.title} className='rounded-lg'/>}
          <Button color='primary'>{post?'Update':'Publish'}</Button>
        </div>
      </form>
    </div>
  )
}

export default PostForm