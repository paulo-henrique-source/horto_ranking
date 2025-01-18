import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import App from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Upload from "./pages/upload";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/upload' element={<Upload />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
