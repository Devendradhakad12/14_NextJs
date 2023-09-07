'use client'

//import ServerComponent from '@components/ServerComponent' 
// 👆 we can't use server components in client component like this

import React from 'react'

function Contect({children,value}) {
  return (
    <div className='topDiv'>
      {value}
   {/*    <ServerComponent/> */} 
   {children}
    </div>
  )
}

 
export default Contect
