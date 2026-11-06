import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./User/User-Pages/Dashboard";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/user" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
