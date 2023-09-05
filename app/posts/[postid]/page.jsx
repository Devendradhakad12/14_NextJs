'use client'

import Link from 'next/link'
import React from 'react'

const page = ({params}) => {
  console.log(params)
  return (
    <div className="topDiv">
    post id :   {params.postid}
    
      <Link href='/' className="btn">Home</Link>
    </div>
  )
}

export default page
