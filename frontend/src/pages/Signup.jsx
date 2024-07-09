import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Signup() {

     let [name,setName] = useState()
     let [email,setEmail] = useState()
     let [password,setPassword] = useState()


          axios.post('http://localhost:4000/auth/signup',{name,email,password})

  return (
    <div className='container'>
        <h1>signup</h1>
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type='text' placeholder='Enter your name' autoFocus onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type='email' placeholder='Enter your email' autoFocus onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type='password' placeholder='Enter your password' autoFocus onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type='submit'>Signup</button>
            <span>Already have an account ? 
                <Link to="/login">Login</Link>
            </span>
        </form>
    </div>
  )
}

export default Signup