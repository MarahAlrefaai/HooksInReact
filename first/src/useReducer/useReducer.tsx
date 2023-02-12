import React from "react";
import { useState, useReducer } from "react";
import ReactDOM from "react-dom/client";

const ACTIONS :{INCREASE: string, DECREASE: string}= {
    INCREASE: "INCREASE",
    DECREASE: "DECREASE"
  };
  


const counterReducer = (state: { count: number; }, action: { type: any; }) => {
  switch (action.type) {
    case ACTIONS.INCREASE :
      return { ...state, count: state.count + 1 };
    case ACTIONS.DECREASE:
      return { ...state, count: state.count - 1 };
    default:
      throw new Error();
  }
};

export default function UsereducerHook() {

  const [state, dispatch]  = useReducer(counterReducer ,  {count:0});
 
  const handleIncrease = () => {
    dispatch({ type: 'INCREASE' });
  };

  const handleDecrease = () => {
    dispatch({ type: 'DECREASE' });
  };

  return (
    <>
      <span style={{ margin: 100 }}>
        <button
          style={{
            height: 50,
            width: 150,
            borderRadius: 100,
            color: "orange",
            margin: 20,
            fontSize: 30,
          }}
          type="button"
          onClick={handleDecrease}
        >
          -
        </button>

          <span> {state.count}</span>
        <button
          style={{
            height: 50,
            width: 150,
            borderRadius: 100,
            color: "orange",
            margin: 20,
            fontSize: 30,
          }}
          type="button"
          onClick={handleIncrease}
        >
          +
        </button>
      </span>
    </>
  );
}
