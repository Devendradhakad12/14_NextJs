'use client'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'
import toast from 'react-hot-toast'

const SignupPage = () => {
 const [loading,setLoading] = useState(false)
  const router = useRouter()
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  })

  const onSignup = async (e:FormEvent) => {
    e.preventDefault()
    setLoading(true)
           try {
              await axios.post("/api/users/signup",user)
              toast.success("Signup success")
              router.push("/login")
           } catch (error) {
            toast.error("Something went wrong")
              console.log(error)
           }finally{
            setLoading(false)
           }
  }
  return (
    <div className="mainDiv">
      <div className="loginDiv">
        <h1 className="loginH1">Sign up</h1>
        <form className="loginForm" onSubmit={onSignup}>
          <input type="text" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} placeholder="Enter Your Username" className="formInput" required />
          <input type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="Enter Your Email" className="formInput" required />
          <input type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="Enter Your Password" className="formInput" required />
          <button type="submit" className="lsBtn">{loading ? "Signup....." : "SignUp"}</button>
        </form>
        <p className="loginP">
          New User? <Link href="/login">Login</Link>{" "}
        </p>
      </div>

    </div>
  )
}

export default SignupPage
