import React from 'react';
// import { forwardRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';
import { useId } from 'react';

function RTE({
  name,// why name
  label,
  control,
  defaultValue='Write inhere...',
  className='',
  ...props
}) {
  const id=useId()

  return (
    <div className='w-1/2'>
      {label  && <label htmlFor={id} className=''>{label}</label>}    
      <Controller
      name={name || 'content'}
      control={control} 
      render={({field:{onChange}})=>( // onchange never read
        <Editor
        id={id}
        apiKey='ohiyqf932zaevp1kwrzetil36x86zcddhzj90j7qlwc6e4fg'
        init={{
          menubar: true,
          toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        }}
        className={`p-2 ${className}`}
        {...props}
        onEditorChange={onchange}
        />
      )}
      />
    </div>
  );
}
export default RTE