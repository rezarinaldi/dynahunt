"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Toast from "@/lib/toast";

export const Register = () => {
  const router = useRouter();
  const { toastSuccess, toastError } = Toast();
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
      toastError("All fields must be filled!");
      return;
    }

    const res = await fetch("/api/v1/auth/register", {
      method: "POST",
      body: JSON.stringify(registerData),
    });

    if (res.status === 400 || res.status === 401) {
      const { message } = await res.json();
      toastError(message);
      return;
    }

    const { message } = await res.json();
    toastSuccess(message);
    router.push("/login");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex min-w-3/5 max-w-4xl">
          <div className="lg:w-3/5 w-full p-5">
            <div className="flex justify-center lg:justify-start font-bold">
              <Link href={"/"}>
                <div className="flex items-center lg:items-start">
                  <Image
                    src={"/img/dh.svg"}
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
                Register to <span className="text-neutral">DynaHunt</span>
              </h2>
              <div className="border-2 w-10 border-purple-500 inline-block mb-2"></div>

              <div className="w-full flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleInputEvent}
                    autoComplete="off"
                    className="border border-slate-300 text-sm bg-white rounded-md p-2 focus:outline-none"
                  />
                  <input
                    type="number"
                    name="phone_number"
                    placeholder="Phone Number Manager"
                    onChange={handleInputEvent}
                    autoComplete="off"
                    className="border border-slate-300 text-sm bg-white rounded-md p-2 focus:outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleInputEvent}
                    autoComplete="off"
                    className="border border-slate-300 text-sm bg-white rounded-md p-2 focus:outline-none"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleInputEvent}
                    autoComplete="off"
                    className="border border-slate-300 text-sm bg-white rounded-md p-2 focus:outline-none"
                  />
                </div>
                <button
                  onClick={handleRegister}
                  className="bg-purple-400 hover:bg-purple-700 transition-all text-slate-100 py-2 px-5 rounded-md text-sm"
                >
                  Register
                </button>
              </div>

              <p className="text-xs mt-4 text-slate-400">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-indigo-500 hover:text-purple-700 hover:font-bold transition-all"
                >
                  Log in now
                </Link>
              </p>
              <p className="text-sm font-semibold mt-5 lg:hidden block">
                Crafted with 💜 by Dynacode
              </p>
            </div>
          </div>
          <div className="w-2/5 bg-purple-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12 hidden lg:block">
            <Link href={"/"} className="flex justify-center items-center">
              <Image
                src={"/img/dh-white.svg"}
                width={40}
                height={40}
                alt={"logo"}
              />
            </Link>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">
              Register to share & start to join fresh new collaboration
              opportunities with us.
            </p>
            <p className="text-sm font-semibold">Crafted with 💜 by Dynacode</p>
          </div>
        </div>
      </main>
    </div>
  );
};
