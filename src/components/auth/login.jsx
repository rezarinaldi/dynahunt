"use client";

import React, { useState } from "react";

export const Login = () => {
  const [loginData, setLoginDate] = useState({
    email: "",
    password: "",
  });

  function handleInputEvent(e) {
    setLoginDate({ ...loginData, [e.target.name]: e.target.value });
  }

  async function handleLogin() {
    const { email, password } = loginData;

    if (!email || !password) {
      console.log("All field must be filled");
      return;
    }

    const res = await fetch("/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify(loginData),
    });
    const data = await res.json();
    console.log(data);
  }

  return (
    <main>
      <div className="text-center">
        <h1>Login</h1>
        <p>Welcome back!</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
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
      <button onClick={handleLogin}>Login</button>
    </main>
  );
};
