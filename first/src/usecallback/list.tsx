import React from "react";
import { useState, useEffect } from "react";

export default function List({ getItems }: any) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log("updating items ");
  }, [getItems]);

  return (
    <>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </>
  );
}
