import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { AppHeader } from "./layout/AppHeader";

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
