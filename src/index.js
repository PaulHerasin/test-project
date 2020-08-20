import React from "react";
import { render } from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const app = (
  <div>
    <App />
  </div>
);

render(app, document.getElementById("root"));

serviceWorker.unregister();
