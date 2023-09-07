import Link from 'next/link'
import React from 'react'

// /posts
const page = () => {
  return (
    <div className="topDiv">
      page posts
<Link href='/' className="btn">Home</Link>
    </div>
  )
}

export default page
