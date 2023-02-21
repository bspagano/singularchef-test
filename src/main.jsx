import React from "react";
import ReactDOM from "react-dom/client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
// import './sass/index.scss';



import ThemeContext from "./context/ThemeContext";
import useInitialState from "./hooks/useInitialState";
import App from "./App";


ReactDOM.createRoot(document.getElementById("root")).render(<App />);
