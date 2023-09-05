'use client'
import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <div className=' flex gap-5 justify-center items-center'>
      <Link href={'/'}>  Nav bar </Link> 
        <Link href={'/posts'} className="btn">Post page</Link>
        <Link href={'/posts/new'} className="btn">New Post page</Link>
        <Link href={'/posts/postidkjrnnt'} className="btn"> Post id page</Link>
    </div>
  )
}

export default Nav
