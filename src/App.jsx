import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserInfo from './UserInfo'
import Button from './Button'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Welcome to Our App</h1>
        <UserInfo />
        <Button />
      </div>
    </>
  )
}

export default App
