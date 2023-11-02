'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const SignupPage = () => {
  const [user, setUser] = useState({
  
    email: "",
    password: "",
  })

  const onSignup = async () => {
  
  }
  return (
    <div className="mainDiv">
      <div className="loginDiv">
        <h1 className="loginH1">Login</h1>
        <form className="loginForm">
          <input type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="Enter Your Email" className="formInput" required />
          <input type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="Enter Your Password" className="formInput" required />
          <button type="submit" className="lsBtn">Login</button>
        </form>
        <p className="loginP">
          New User? <Link href="/signup">Signup</Link>{" "}
        </p>
      </div>

    </div>
  )
}

export default SignupPage
