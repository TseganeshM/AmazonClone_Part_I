import React from "react";
import { useColor } from "./contextProvider";
import "./assets/styles.css";

function ComponetsB() {
  const { color } = useColor();
  return (
    <div className={color}>
      <h1>ComponetsB</h1>
      <h1>color is {color}</h1>
    </div>
  );
}

export default ComponetsB;
