import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";

const GolbalStyle= createGlobalStyle`
*{
box-sizing:border-box;
padding:0;
margin:0;
}
body{
background-color:#323334;
color:#fff;
min-height:100vh;
}
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode> 
    <GolbalStyle/> 
    <App />
  </React.StrictMode>
);
