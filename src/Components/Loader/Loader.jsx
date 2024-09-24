import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
//import FadeLoader from "react-spinners/FadeLoader";
function Loader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <ClipLoader color="blue" />
      {/*<FadeLoader color="blue" />*/}
    </div>
  );
}

export default Loader;
