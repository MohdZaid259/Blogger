import React, { Children } from 'react'

function Container({children}) {
  return (
    <div className='flex flex-wrap justify-center gap-5 p-10'>{children}</div>
  )
}

export default Container