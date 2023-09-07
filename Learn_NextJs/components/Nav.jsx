import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar'

function Nav() {

  return (
    <div className=' flex gap-5 justify-center items-center mt-4'>
      <Link href={'/'}>  Nav bar </Link> 
        <Link href={'/posts'} className="btn">Post</Link>
        <Link href={'/posts/new'} className="btn">NewPost</Link>
        <Link href={'/posts/postidkjrnnt'} className="btn">PostId</Link> 
        <Link href={'/contect'} className="btn">Contect</Link> 
        <SearchBar/>
    </div>
  )
}

export default Nav
