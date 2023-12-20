import React from 'react'
import { useState,useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');


    /***** */
    const {setUser} = useContext(UserContext) // This is taken from UserContext file 

    const handleSubmit = (e)=>{
e.preventDefault()
setUser({username,password})
    }
    /********This section is used for collecting the data using the context on the login page */
  return (
    <div>
        <h2>Login Here</h2>
        <input type="text" 
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        placeholder='Enter username' />
        <br/>
        <br/>
        <input type="text" 
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        placeholder='Enter password' />
        <br/>
        <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login