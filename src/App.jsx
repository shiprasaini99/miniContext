import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './Component/Login'
import Profile from './Component/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
      
    
  )
}

export default App
