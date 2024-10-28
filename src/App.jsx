import { useContext, useEffect, useState } from "react";

import "./App.css";

import Routering from "./Routering.jsx";
import { useReducer } from "react";

import { ThemeProider } from "./contextProider.jsx";
import ComponentA from "./ComponentA.jsx";
import ComponetsB from "./ComponetsB.jsx";
import { DataContet } from "./Components/DataProider/DataProrider.jsx";
import { Type } from "./Utility/action.type.js";
import { auth } from "./Utility/Firebase.js";

function App() {
  const [{ user }, dispatch] = useContext(DataContet);
  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        console.log(authuser);
        dispatch({ type: Type.SET_USER, user: authuser });
      } else {
        dispatch({ type: Type.SET_USER, user: null });
      }
    });
  }, []);
  return (
    <>
      <Routering />
    </>
  );
}

export default App;
