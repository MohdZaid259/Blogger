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
    <>
    {label  && <label htmlFor={id} className=''>{label}</label>}
    <input type={type} placeholder={placeholder} ref={ref} id={id} className={` ${classname}`} {...props}></input>
    </>
  )
}

export default forwardRef(Input)