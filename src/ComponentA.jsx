import React from "react";
import { useColor } from "./contextProider";

function ComponentA() {
  const { colorToggler } = useColor();
  return (
    <div>
      <h1>ComponetsA</h1>
      <button onClick={colorToggler}>color Toggler </button>
    </div>
  );
}

export default ComponentA;
