import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    window.location.href = "/";
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
