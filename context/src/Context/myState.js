import React, { useReducer } from "react";
import myContext from "./myContex";
import myReducer from "./myReducer";
import {
  INCREMENT_BY_1,
  INCREMENT_BY_10,
  INCREMENT_BY_5,
  DECREMENT_BY_1,
  DECREMENT_BY_10,
  DECREMENT_BY_5
} from "./types";

const MyState = props => {
  const initialState = {
    value: 0
  };
  const [state, dispatch] = useReducer(myReducer, initialState);
  const increamentBy1 = () => {
    dispatch({
      type: INCREMENT_BY_1
    });
  };
  const increamentBy5 = () => {
    dispatch({
      type: INCREMENT_BY_5
    });
  };
  const increamentBy10 = () => {
    dispatch({
      type: INCREMENT_BY_10
    });
  };

  const decrementBy1 = () => {
    dispatch({
      type: DECREMENT_BY_1
    });
  };
  const decrementBy5 = () => {
    dispatch({
      type: DECREMENT_BY_5
    });
  };
  const decrementBy10 = () => {
    dispatch({
      type: DECREMENT_BY_10
    });
  };
  return (
    <myContext.Provider
      value={{
        value: state.value,
        increamentBy1,
        increamentBy5,
        increamentBy10,
        decrementBy1,
        decrementBy5,
        decrementBy10
      }}
    >
      {props.children}
    </myContext.Provider>
  );
};

export default MyState;
