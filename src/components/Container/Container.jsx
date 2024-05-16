import React, { Children } from 'react'

function Container({children}) {
  return (
    <div className='min-h-full'>{children}</div>
  )
}

export default Container