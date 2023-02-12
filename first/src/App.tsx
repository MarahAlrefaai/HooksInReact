import { useState } from "react";
import reactLogo from "./assets/react.svg";
import MemoHook from "./useMemoHook/useMemoHook";
import CallBackHook from "./usecallback/useCallbackHook";
import UsereducerHook from "./useReducer/useReducer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          backgroundColor: "#186A3B",
          height: 200,
        }}
      >
        <h1>MemoHook</h1>
        <MemoHook />
      </div>

      <div
        style={{
          backgroundColor: "#239B56",
          height: 200,
        }}
      >
        <h1>CallBackHook</h1>
        <CallBackHook />
      </div>

      <div
        style={{
          backgroundColor: "#82E0AA",
          height: 200,
        }}
      >
        <h1>UsereducerHook</h1>
        <UsereducerHook />
      </div>
    </>
  );
}

export default App;
