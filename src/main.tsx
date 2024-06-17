import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { Authenticator } from "@aws-amplify/ui-react";

Amplify.configure(outputs);

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Authenticator.Provider>
        <App />
      </Authenticator.Provider>
    </React.StrictMode>
  );
}
