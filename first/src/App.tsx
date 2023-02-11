import { useState } from 'react'
import reactLogo from './assets/react.svg'
import MemoHook from './useMemoHook'
import CallBackHook  from './usecallback/useCallbackHook'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
{/* <MemoHook /> */}
<CallBackHook />
</>

  )
}

export default App
