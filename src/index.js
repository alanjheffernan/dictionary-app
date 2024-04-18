import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FontProvider from "./contexts/FontContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FontProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FontProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
