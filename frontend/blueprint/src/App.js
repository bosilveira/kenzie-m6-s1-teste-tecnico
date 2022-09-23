import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/dashboard.page";
import { Intro } from "./pages/intro.page";
import { LoginDatabasePage } from "./pages/login.database.page";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/login" element={<LoginDatabasePage/>}/>
        <Route path="/" element={<Intro/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App
