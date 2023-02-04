import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { ProductProvider } from "./Components/Context/ProductContext";

// import { Provider } from "react-redux";
// import Store from "./Components/Redux/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <React.StrictMode>
    {/* <ProductProvider > */}
    {/* <Provider store={Store}> */}
      <App />
    {/* </Provider> */}
      
    {/* </ProductProvider> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
