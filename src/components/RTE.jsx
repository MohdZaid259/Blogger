import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

function RTE({
  name,
  label,
  control,
  defaultValue='Write inhere...',
  className='',
  ...props
}) {
  const [charCount, setCharCount] = React.useState(0);

  const handleChange = (value) => {
    if (value.length <= 512) {
      setCharCount(value.length);
    }
  };

  return (
    <div className=''>
      {label  && <label className=''>{label}</label>}    
      <Controller
      name={name || 'content'}
      control={control} 
      render={({field:{onChange}})=>(
        <Editor
        initialValue={defaultValue}
        apiKey='ohiyqf932zaevp1kwrzetil36x86zcddhzj90j7qlwc6e4fg'
        init={{
          menubar: true,
          toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        }}
        className={`${className}`}
        {...props}
        onEditorChange={onChange && handleChange}
        />
      )}
      />
      {(500-charCount)>0?<div className='text-gray-500 text-sm ml-1 '>{500-charCount} characters remaining</div>:<div className='text-red-500 text-sm'> limit exceeded !!</div>}
    </div>
  );
}
export default RTE