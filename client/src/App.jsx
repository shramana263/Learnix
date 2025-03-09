import React from 'react'
import { Button, buttonVariants } from './components/ui/button'
import { Link } from 'lucide-react'
// import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div className='text-3xl font-bold'>
      Hello
      <div className="flex flex-col items-center justify-center min-h-svh">
      <Button>Click me</Button>
      <Button variant="outline">Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="destructive">Button</Button>

    </div>
    </div>
  )
}

export default App
