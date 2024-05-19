import React, { useEffect, useState } from 'react';
import service from '../Appwrite/config';
import { useParams } from 'react-router-dom';

function Fullscrn() {
  const { fileId } = useParams();
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (fileId) {
      const data=service.getFilePreview(fileId)
        setImage(data)
    }
  }, [fileId]);

  return (
    <div>
      {image ? <img className='' src={image} alt="filepreview" /> : 'Loading...'}
    </div>
  );
}

export default Fullscrn;