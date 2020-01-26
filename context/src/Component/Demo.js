import React, { useContext } from "react";
import myContext from ".././Context/myContex";

export default function Demo() {
  const context = useContext(myContext);
  const {
    value,
    increamentBy1,
    increamentBy5,
    increamentBy10,
    decrementBy1,
    decrementBy5,
    decrementBy10
  } = context;
  return (
    <div>
      <h1>value:{value}</h1>
      <div>
        <button onClick={increamentBy1}>Increment 1</button>
        <button onClick={increamentBy5}>Increment 5</button>
        <button onClick={increamentBy10}>Increment 10</button>
      </div>

      <div>
        <button onClick={decrementBy1}>Decrement 1</button>
        <button onClick={decrementBy5}>Decrement 5</button>
        <button onClick={decrementBy10}>Decrement 10</button>
      </div>
    </div>
  );
}
