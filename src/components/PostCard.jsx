import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import service from '../Appwrite/config';
import noimage from '../Media/noimage.png';

function PostCard({ $id, title, image }) {
  const navigate = useNavigate();
  const cardstyle = {
    boxShadow: '0 5px 8px rgba(0, 0, 0, 0.6)',
  };

  return (
    <div className="gap-2">
      <Card
        className=" border border-blue-900 transform transition-transform duration-300 hover:scale-105"
        style={cardstyle}
        shadow="md"
        key={$id}
        isPressable
        onPress={() => navigate(`/post/${$id}`)}
      >
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={title}
            className="w-full object-cover rounded-none h-[140px]"
            src={image ? service.getFilePreview(image) : noimage}
          />
        </CardBody>
        <CardFooter className="bg-teal-400 dark:bg-gray-900 text-small justify-between">
          <p className="text-xl font-heading">{title}</p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default PostCard;
