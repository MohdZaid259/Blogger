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
    <>
      {label  && <label htmlFor={id} className=''>{label}</label>}    
      <Controller
      name={name || 'content'}
      control={control} 
      render={({field:{onChange}})=>( // onchange never read
        <Editor
        id={id}
        apiKey='ihqio0mmzl9glbpfgoqmckkdk5z6t69xrlffsjzrenk8l39c'
        init={{
          menubar: true,
          plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
          toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        }}
        className={`p-2 ${className}`}
        {...props}
        onEditorChange={onchange}
        />
      )}
      />
    </>
  );
}
export default RTE