import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Private from "./Private";
import Public from "./Public";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import NoPage from "../pages/NoPage";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Protected Routes */}
          <Route path="/" element={<Private />}></Route>

          {/* Public Routes */}
          <Route path="/" element={<Public />}>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Route>

          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
