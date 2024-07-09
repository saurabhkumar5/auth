import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
        <div className='container'>
        <h1>Login</h1>
        <form>
            <div>
                <label htmlFor="email">Email</label>
                <input type='email' placeholder='Enter your email' autoFocus />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type='password' placeholder='Enter your password' autoFocus />
            </div>
            <button type='submit'>Login</button>
            <span>Doesnt have an account ? 
                <Link to="/signup">Signup</Link>
            </span>
        </form>
    </div>
  
  )
}

export default Login