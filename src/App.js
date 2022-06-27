import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// hooks
import { useState, useEffect } from "react";

// context
import { AuthProvider } from "./context/AuthContext";

// pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import RegisterUser from "./pages/Register/RegisterUser";

//componentes
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard/Dashboard";
import CrecheDetail from "./pages/CrecheDetail/CrecheDetail";
import RegisterAddress from "./pages/RegisterAddress/RegisterAddress";
import CreateCreche from "./pages/CreateCreche/CreateCreche";
import AlunosList from "./pages/AlunosList/AlunosList";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<RegisterUser />} />
              <Route path="/registerAddress" element={<RegisterAddress />} />
              <Route path="/posts/create" element={<CreateCreche />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/creche/:id" element={<CrecheDetail />} />
              <Route
                path="/dashboard/creche/:id/criancas"
                element={<AlunosList />}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
