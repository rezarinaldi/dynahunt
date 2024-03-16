"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex min-w-2/3 max-w-4xl">
          <div className="lg:w-3/5 w-full p-5">
            <div className="flex justify-center lg:justify-start font-bold">
              <Link href={"/"}>
                <div className="flex items-center lg:items-start">
                  <Image
                    src={"/icon.png"}
                    width={25}
                    height={25}
                    alt={"logo"}
                    className="mr-2"
                  />
                  <span className="text-purple-500">Dyna</span>
                  Hunt
                </div>
              </Link>
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-purple-500 mb-2">
                Log in to <span className="text-neutral">DynaHunt</span>
              </h2>
              <div className="border-2 w-10 border-purple-500 inline-block mb-2"></div>

              <div className="w-full flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleInputEvent}
                    className="border-2 border-slate-300 text-sm bg-white rounded-md p-2 focus:outline-slate-400"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleInputEvent}
                    className="border-2 border-slate-300 text-sm bg-white rounded-md p-2 focus:outline-slate-400"
                  />
                </div>
                <button
                  onClick={handleLogin}
                  className="bg-purple-400 hover:bg-purple-700 transition-all text-slate-100 py-2 px-5 rounded-md text-sm"
                >
                  Log in
                </button>
              </div>

              <p className="text-xs mt-4 text-slate-400">
                Don`t have an account?{" "}
                <Link
                  href="/register"
                  className="text-indigo-500 hover:text-purple-700 hover:font-bold transition-all"
                >
                  Register now
                </Link>
              </p>
              <p className="text-sm font-semibold mt-5 lg:hidden block">
                Crafted with 💜 by Dynacode
              </p>
            </div>
          </div>
          <div className="w-2/5 bg-purple-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12 hidden lg:block">
            <Link href={"/"} className="flex justify-center items-center">
              <Image src={"/icon.png"} width={40} height={40} alt={"logo"} />
            </Link>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">
              Log in to create & start to find fresh new collaboration
              opportunities with us.
            </p>
            <p className="text-sm font-semibold">Crafted with 💜 by Dynacode</p>
          </div>
        </div>
      </main>
    </div>
  );
};
