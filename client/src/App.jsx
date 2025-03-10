import React from 'react'
import { Button, buttonVariants } from './components/ui/button'
import { Link } from 'lucide-react'
import Login from './pages/Login'
// import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div className=''>

      <main>
        {/* <Button>Click me</Button> */}
        <Login />
      </main>
    </div>
  )
}

export default App
