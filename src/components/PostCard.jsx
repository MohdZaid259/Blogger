import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import service from '../Appwrite/config'
import { useNavigate } from "react-router-dom";

function PostCard({$id,title,image}) {
  const navigate=useNavigate()
  
  return (
    <div className="gap-2">
        <Card className="border" shadow="sm" key={$id} isPressable onPress={()=>navigate(`/post/${$id}`)}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={title}
              className="w-full object-cover rounded-none h-[140px]"
              src={service.getFilePreview(image)}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b className="text-lg">{title}</b>
          </CardFooter>
        </Card>
    </div>
  );
}

export default PostCard