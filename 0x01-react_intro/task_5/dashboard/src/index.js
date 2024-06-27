import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import Notifications from "./Notifications/Notifications";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Notifications />
       <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);