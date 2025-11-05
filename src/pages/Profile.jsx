import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Профіль користувача</h2>
      <p>Це захищена сторінка, доступна лише авторизованим користувачам.</p>
      <button
        onClick={() => {
          localStorage.removeItem("auth");
          window.location.href = "/";
        }}
      >
        Вийти
      </button>
      <br />
      <Link to="/">На головну</Link>
    </div>
  );
}