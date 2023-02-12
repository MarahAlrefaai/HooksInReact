import React from "react";
import { useState, useMemo } from "react";
import ReactDOM from "react-dom/client";

export default function MemoHook() {
  const [incrementOne, setIncrementOne] = React.useState(0);
  const [incrementTwo, setIncrementTwo] = React.useState(0);

  const handleIncrementOne = (event: any) => {
    setIncrementOne(incrementOne + 1);
  };

  const handleIncrementTwo = () => {
    setIncrementTwo(incrementTwo + 2);
  };

  const isEven = useMemo(() => {
    let i: number = 0;
    while (i < 2000000000) {
      i++;
    }


    
    return incrementOne % 2 == 0;
  }, [incrementOne]);
  return (
    <>
      <span style={{ margin: 100 }}>
        <button
          style={{
            backgroundColor: "#F1C40F ",
            border: 0.25,
            height: 50,
            width: 300,
            borderRadius: 100,
          }}
          type="button"
          onClick={handleIncrementTwo}
        >
          increment - {incrementTwo}
        </button>
      </span>
      <span style={{ margin: 100 }}>
        <button
          style={{
            backgroundColor: "#F1C40F ",
            border: 0.25,
            height: 50,
            width: 300,
            borderRadius: 100,
          }}
          type="button"
          onClick={handleIncrementOne}
        >
          increment - {incrementOne}
        </button>
        <span>{isEven ? ": Even" : ": Odd"}</span>
      </span>
    </>
  );
}
