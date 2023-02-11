import { useState } from 'react'
import reactLogo from './assets/react.svg'
import MemoHook from './useMemoHook'


function App() {
  const [count, setCount] = useState(0)

  return (
<>
<MemoHook />

</>

  )
}

export default App
