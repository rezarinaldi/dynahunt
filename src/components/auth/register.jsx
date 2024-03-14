"use client";
import React, { useState } from "react";

export const Register = () => {
  const [registerData, setRegisterData] = useState({
    nama: "",
    phone_number: "",
    email: "",
    password: "",
  });

  function handleInputEvent(e) {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  }

  async function handleRegister() {
    const { name, email, password } = registerData;

    if (!name || !email || !password) {
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
        <input name="name" placeholder="Name" onChange={handleInputEvent} />
        <input
          name="phone_number"
          placeholder="Phone Number"
          onChange={handleInputEvent}
        />
        <input
          name="email"
          placeholder="email@domain.com"
          onChange={handleInputEvent}
        />
        <input
          name="password"
          placeholder="password"
          onChange={handleInputEvent}
        />
      </div>
      <button onClick={handleRegister}>Register</button>
    </main>
  );
};
