import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DataProrider } from "./Components/DataProider/DataProrider.jsx";
import { initialState, reducer } from "./Utility/reducer.js";

createRoot(document.getElementById("root")).render(
  <DataProrider reducer={reducer} initialState={initialState}>
    <App />
  </DataProrider>
);
