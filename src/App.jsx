import { useState } from "react";

import "./App.css";

import Routering from "./Routering.jsx";
import { useReducer } from "react";

import { ThemeProider } from "./contextProider.jsx";
import ComponentA from "./ComponentA.jsx";
import ComponetsB from "./ComponetsB.jsx";

function App() {
  // Define the initial state
  const initialState = 0;
  // Define the reducer function
  const [state, dispatch] = useReducer(reducer, initialState, init);
  function init(a) {
    return { count: 0 };
  }
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return init(action.payload);
      default:
        throw new Error("Unknown action type");
    }
  }
  // useReducer returns the current state and a dispatch function to trigger actions

  return (
    <>
      <Routering />
    </>
  );
}

export default App;
