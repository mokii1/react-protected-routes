import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() !== "") {
      localStorage.setItem("auth", "true");
      navigate("/profile");
    } else {
      alert("Введіть ім’я користувача!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Сторінка входу</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Ваше ім’я"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button type="submit">Увійти</button>
      </form>
    </div>
  );
}