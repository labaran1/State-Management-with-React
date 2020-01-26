//REducer

import {
  INCREMENT_BY_1,
  INCREMENT_BY_10,
  INCREMENT_BY_5,
  DECREMENT_BY_1,
  DECREMENT_BY_10,
  DECREMENT_BY_5
} from "./types";

const Reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_BY_1: {
      return {
        ...state,
        value: state.value + 1
      };
    }
    case INCREMENT_BY_5: {
      return {
        ...state,
        value: state.value + 5
      };
    }
    case INCREMENT_BY_10: {
      return {
        ...state,
        value: state.value + 10
      };
    }
    case DECREMENT_BY_1: {
      return {
        ...state,
        value: state.value - 1
      };
    }
    case DECREMENT_BY_5: {
      return {
        ...state,
        value: state.value - 5
      };
    }
    case DECREMENT_BY_10: {
      return {
        ...state,
        value: state.value - 10
      };
    }
    default:
      return {
        ...state
      };
  }
};

export default Reducer;
