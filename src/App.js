import React from "react";
import { StyledContainer } from "./components/Styles";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <StyledContainer>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </StyledContainer>
    </BrowserRouter>
  );
}

export default App;