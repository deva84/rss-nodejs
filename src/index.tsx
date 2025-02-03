import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

// Module 2:
// * import BrowserRouter from 'react-router-dom'
// * wrap App components with BrowserRouter

// Module 3:
// * import Provider from 'react-redux'
// * wrap your App + Browser with Redux Provider in src/index.ts

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
