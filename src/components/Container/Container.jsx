import React, { Children } from 'react'

function Container({children}) {
  return (
    <div className='flex bg-green-50 flex-wrap justify-center gap-5 p-5'>{children}</div>
  )
}

export default Container