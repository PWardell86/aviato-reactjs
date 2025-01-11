import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Plan } from '../../pages/planning/Plan'
import { MantineProvider } from '@mantine/core'

import '@mantine/core/styles.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MantineProvider>
        <Plan></Plan>
      </MantineProvider>
    </>
  )
}

export default App
