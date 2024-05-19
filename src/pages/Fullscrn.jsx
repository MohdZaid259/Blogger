import React, { useEffect, useState } from 'react';
import service from '../Appwrite/config';
import { useParams } from 'react-router-dom';

function Fullscrn() {
  const { fileId } = useParams();
  const [image, setImage] = useState(null);
  const poststyle = {
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)',
  };

  useEffect(() => {
    if (fileId) {
      const data=service.getFilePreview(fileId)
        setImage(data)
    }
  }, [fileId]);

  return (
    <div className='flex justify-center items-center w-full'>
      {image ? <img className='w-4/5' style={poststyle} src={image} alt="filepreview" /> : 'Loading...'}
    </div>
  );
}

export default Fullscrn;