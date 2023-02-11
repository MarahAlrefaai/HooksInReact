import React from "react";
import { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import List from "./list";

export default function CallBackHook() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };
  return (
    <>
      <span style={{ margin: 100 }}>
        <input
          type={"number"}
          value={number}
          onChange={(e) => {
            setNumber(parseInt(e.target.value));
          }}
        />
        <button
          style={{
            backgroundColor: theme.color,

            height: 50,
            width: 300,
            borderRadius: 100,
            color: "orange",
          }}
          type="button"
          onClick={(e) => {
            setDark(!dark);
          }}
        >
          theme
        </button>
      </span>
      <List getItems={getItems} />
    </>
  );
}
