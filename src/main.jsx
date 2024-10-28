import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DataProvider } from "./Components/DataProvider/DataProrvider.jsx";
import { initialState, reducer } from "./Utility/reducer.js";

createRoot(document.getElementById("root")).render(
  <DataProvider reducer={reducer} initialState={initialState}>
    <App />
  </DataProvider>
);
