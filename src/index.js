import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./vendor/normalize.css";
import "./vendor/fonts/fonts.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";

import "./18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
);

reportWebVitals();
