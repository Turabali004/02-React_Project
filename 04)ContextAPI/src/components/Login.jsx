import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

function Login() {
    const [userName, setUserName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [userIdNum, setUserIdNum] = React.useState('')

    const {setUser, setUserId} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser(userName,password)
        setUserId(userIdNum)
        // setUserId(userIdNum)
    }
    
  return (
    <div className='inputs'>
      <input type="text" placeholder='Enter your name' value={userName} onChange={(e) => setUserName(e.target.value)} />
      <input type="text" placeholder='Enter your Id' value={userIdNum} onChange={(e) => setUserIdNum(e.target.value)}/>
      <input type="text" placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Click Me</button>
    </div>
  )
}

export default Login
