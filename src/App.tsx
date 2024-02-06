import React from 'react'
import { MyButton } from './components/MyButton'
import {Button} from './components/Button'

function App() {

  return (
    <>
      <MyButton variant="primary" size="large">Primary Large</MyButton>
      <Button label='hello' primary/>
    </>
  )
}

export default App
