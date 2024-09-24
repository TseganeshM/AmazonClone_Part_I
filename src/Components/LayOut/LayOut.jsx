import React from "react";
import Header from "../Header/Header";
import LowerHeader from "../Header/Lower_Header";

function LayOut({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default LayOut;
