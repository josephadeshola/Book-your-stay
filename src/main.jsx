import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import Datastor from "../redux/Datastor";
// export const store = configureStore({
//   reducer: {
//     Datastor,
//   },
// });
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      {/* <Provider store={store}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);
