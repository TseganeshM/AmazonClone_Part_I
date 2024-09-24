import React from "react";

const App2 = () => {
  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Count: {state.count}</h2>
        <div>
          <button onClick={() => dispatch({ type: "increment" })}>
            Increase
          </button>
          <button onClick={() => dispatch({ type: "decrement" })}>
            Decrease
          </button>
          <button
            onClick={() => dispatch({ type: "reset", payload: initialState })}
          >
            Reset
          </button>
        </div>
      </div>

      <ThemeProider>
        <ComponentA />
        <ComponetsB />
      </ThemeProider>
    </div>
  );
};

export default App2;
