import React,{forwardRef,useId} from 'react'

function Input({
  label,
  type='text',
  placeholder='',
  classname='',
  ...props
},ref) {
  const id=useId()

  return (
    <div className='flex'>
    {label  && <label htmlFor={id} className=' pt-1'>{label}</label>}
    <input type={type} placeholder={placeholder} ref={ref} id={id} className={` ${classname}`} {...props}></input>
    </div>
  )
}

export default forwardRef(Input)