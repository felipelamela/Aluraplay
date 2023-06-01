import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main/Main";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import { GlobalContextAPIProvider } from "./GlobalContext/GlobalContext";

function App() {
  return (
    <GlobalContextAPIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard/*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </GlobalContextAPIProvider>
  );
}

export default App;
