import React from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

function Login() {
    const [password,setPassword] = useState('')
    const [username ,setUsername] = useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username, password})
    }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} placeholder='username' />
      {" "}
      <input type="text" placeholder="password"value={password} onChange={(e)=> setPassword(e.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
