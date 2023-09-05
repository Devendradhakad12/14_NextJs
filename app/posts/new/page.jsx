 import Link from 'next/link'
import React from 'react'
 
 // /posts/new
 const page = () => {
   return (
     <div className="topDiv">
      create new post
      <Link href='/' className="btn">Home</Link>
     </div>
   )
 }
 
 export default page
 