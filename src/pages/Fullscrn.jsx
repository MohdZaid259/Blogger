import React, { useEffect, useState } from 'react';
import service from '../Appwrite/config';
import { useParams } from 'react-router-dom';

function Fullscrn() {
  const { fileId } = useParams();
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (fileId) {
      service.getFilePreview(fileId)
        .then((data) => {
          console.log(data)
        })
        .catch((err) => {
          console.error(`Couldn't fetch`, err);
        });
    }
  }, [fileId]);

  return (
    <div>
      {image ? <img src={image} alt="File Preview" /> : 'Loading...'}
    </div>
  );
}

export default Fullscrn;
