import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import withAuth from "./hoc/withAuth";

function App() {
  const ProtectedProfile = withAuth(Profile); // застосовуємо HOC

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProtectedProfile />} />
      </Routes>
    </Router>
  );
}

export default App;