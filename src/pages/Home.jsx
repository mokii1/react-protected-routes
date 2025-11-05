import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Головна сторінка</h2>
      <p>Вітаємо у нашому React-застосунку!</p>
      <Link to="/profile">Перейти в профіль</Link>
    </div>
  );
}