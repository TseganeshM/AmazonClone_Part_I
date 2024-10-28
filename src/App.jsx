import { useContext, useEffect, useState } from "react";
import "./App.css";
import Routing from "./Router.jsx";
import { DataContext } from "./Components/DataProvider/DataProrvider.jsx";
import { Type } from "./Utility/action.type.js";
import { auth } from "./Utility/Firebase.js";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        console.log(authuser);
        dispatch({
          type: Type.SET_USER,
          user: authuser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
      <Routing />
    </>
  );
}

export default App;
