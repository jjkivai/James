import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];
const FILTER_BUTTONS = [
  { id: 1, data: "all", pressed: true },
  { id: 2, data: "Active", pressed: false },
  { id: 3, data: "Completed", pressed: false },
];
ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} buttons={FILTER_BUTTONS} />
  </React.StrictMode>,
  document.getElementById("root")
);
