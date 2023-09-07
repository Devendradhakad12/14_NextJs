'use client'
import React, { useState } from 'react'

function SearchBar() {
    const [q,setQ] = useState("")
    console.log(q)
  return (
    <input value={q} onChange={(e)=>setQ(e.target.value)} type="text" placeholder='Search....' className='px-2 py-2 border-4 border-white bg-transparent'/>
  )
}

export default SearchBar
