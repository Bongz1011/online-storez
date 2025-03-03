import React, { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    firstName: "",
    surname: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <h2>Register</h2>
      <input name="firstName" placeholder="First Name" onChange={handleChange} />
      <input name="surname" placeholder="Surname" onChange={handleChange} />
      <input name="username" placeholder="Username" onChange={handleChange} />
      <input name="email" placeholder="Email" type="email" onChange={handleChange} />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
