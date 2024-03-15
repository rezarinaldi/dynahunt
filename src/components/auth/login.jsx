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






















// 'use client';

// import Link from 'next/link';
// import useLogin from '../hooks/useLogin';

// export const Login = () => {
//     const { handleLogin } = useLogin();
//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen py-2">
//             <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
//                 <div className="bg-white rounded-2xl shadow-2xl flex min-w-2/3 max-w-4xl">
//                     <div className="lg:w-3/5 w-full p-5">
//                         <div className="text-center lg:text-left font-bold">
//                             <Link href={'/'}>
//                                 <span className="text-purple-500">
//                                     {' '}
//                                     👓 Dyna
//                                 </span>
//                                 Hunt
//                             </Link>
//                         </div>
//                         <div className="py-10">
//                             <h2 className="text-3xl font-bold text-purple-500 mb-2">
//                                 Log in to DynaVent
//                             </h2>
//                             <div className="border-2 w-10 border-purple-500 inline-block mb-2"></div>

//                             <form
//                                 onSubmit={handleLogin}
//                                 className="w-full flex flex-col gap-6"
//                             >
//                                 <div className="flex flex-col gap-4">
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         placeholder="Email"
//                                         className="border-2 border-slate-300 text-sm bg-white rounded-md p-2 focus:outline-slate-400"
//                                     />
//                                     <input
//                                         type="password"
//                                         placeholder="Password"
//                                         name="password"
//                                         className="border-2 border-slate-300 text-sm bg-white rounded-md p-2 focus:outline-slate-400"
//                                     />
//                                 </div>
//                                 <button className="bg-purple-400 hover:bg-purple-700 transition-all text-slate-100 py-2 px-5 rounded-md text-sm">
//                                     Log in
//                                 </button>
//                             </form>

//                             <p className="text-xs mt-4 text-slate-400">
//                                 Don`t have an account?{' '}
//                                 <Link
//                                     href="/register"
//                                     className="text-indigo-500 hover:text-indigo-700 hover:font-bold transition-all"
//                                 >
//                                     Register now
//                                 </Link>
//                             </p>
//                             <p className="text-sm font-semibold mt-5 lg:hidden block">
//                                 Crafted with 🧡 by Dynacode
//                             </p>
//                         </div>
//                     </div>
//                     <div className="w-2/5 bg-purple-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12 hidden lg:block">
//                         <Link href={'/'}>
//                             <h1 className="text-3xl font-bold">  👓  </h1>
//                         </Link>
//                         <div className="border-2 w-10 border-white inline-block mb-2"></div>
//                         <p className="mb-10">
//                             Log in to create & start explore Creator with us.
//                         </p>
//                         <p className="text-sm font-semibold">
//                             Crafted with 🧡 by Dynacode
//                         </p>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// };







