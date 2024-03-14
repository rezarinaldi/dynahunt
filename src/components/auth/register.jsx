"use client";
import React, { useState } from "react";

export const Register = () => {
  const [registerData, setRegisterData] = useState({
    nama: "",
    phone_number: 0,
    email: "",
    password: "",
  });

  function handleInputEvent(e) {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  }

  async function handleRegister() {
    const { name, phone_number, email, password } = registerData;

    if (!name || !phone_number || !email || !password) {
      console.log("All fields must be filled");
      return;
    }

    const res = await fetch("/api/v1/auth/register", {
      method: "POST",
      body: JSON.stringify(registerData),
    });

    const data = await res.json();
    console.log(data);
  }

  return (
    <main className="space-y-4">
      <div className="text-center">
        <h1>Register</h1>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <input
          type="name"
          name="name"
          placeholder="Name"
          onChange={handleInputEvent}
        />
        <input
          type="number"
          name="phone_number"
          placeholder="Phone Number"
          onChange={handleInputEvent}
        />
        <input
          type="email"
          name="email"
          placeholder="email@domain.com"
          onChange={handleInputEvent}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleInputEvent}
        />
      </div>
      <button onClick={handleRegister}>Register</button>
    </main>
  );
};
