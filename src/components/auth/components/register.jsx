'use client';

import Link from 'next/link';
import useRegister from '../hooks/useRegister';

export const Register = () => {
    const { handleRegister } = useRegister();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <div className="bg-white rounded-2xl shadow-2xl flex min-w-3/5 max-w-4xl">
                    <div className="lg:w-3/5 w-full p-5">
                        <div className="text-center lg:text-left font-bold">
                            <Link href={'/'}>
                                <span className="text-purple-500">
                                    {' '}
                                    👓  Dyna
                                </span>
                                Hunt
                            </Link>
                        </div>
                        <div className="py-10">
                            <h2 className="text-3xl font-bold text-purple-500 mb-2">
                                Register to DynaVent
                            </h2>
                            <div className="border-2 w-10 border-purple-500 inline-block mb-2"></div>

                            <form
                                onSubmit={handleRegister}
                                className="w-full flex flex-col gap-6"
                            >
                                <div className="flex flex-col gap-3">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        autoComplete="off"
                                        className="border border-slate-300 text-sm bg-white rounded-md p-2 focus:outline-none"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        autoComplete="off"
                                        className="border border-slate-300 text-sm bg-white rounded-md p-2 focus:outline-none"
                                    />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        autoComplete="off"
                                        className="border border-slate-300 text-sm bg-white rounded-md p-2 focus:outline-none"
                                    />
                                </div>
                                <button className="bg-purple-400 hover:bg-purple-700 transition-all text-slate-100 py-2 px-5 rounded-md text-sm">
                                    Register
                                </button>
                            </form>

                            <p className="text-xs mt-4 text-slate-400">
                                Have an account?{' '}
                                <Link
                                    href="/login"
                                    className="text-indigo-500 hover:text-indigo-700 hover:font-bold transition-all"
                                >
                                    Log in now
                                </Link>
                            </p>
                            <p className="text-sm font-semibold mt-5 lg:hidden block">
                                Crafted with 🧡 by Dynacode
                            </p>
                        </div>
                    </div>
                    <div className="w-2/5 bg-purple-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12 hidden lg:block">
                        <Link href={'/'}>
                            <h1 className="text-3xl font-bold">  👓  </h1>
                        </Link>
                        <div className="border-2 w-10 border-white inline-block mb-2"></div>
                        <p className="mb-10">
                            Register to share & start explore Creator with us.
                        </p>
                        <p className="text-sm font-semibold">
                            Crafted with 🧡 by Dynacode
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};



















// "use client";

// import { useState } from "react";

// export const Register = () => {
//   const [registerData, setRegisterData] = useState({
//     nama: "",
//     phone_number: 0,
//     email: "",
//     password: "",
//   });

//   function handleInputEvent(e) {
//     setRegisterData({ ...registerData, [e.target.name]: e.target.value });
//   }

//   async function handleRegister() {
//     const { name, phone_number, email, password } = registerData;

//     if (!name || !phone_number || !email || !password) {
//       console.log("All fields must be filled");
//       return;
//     }

//     const res = await fetch("/api/v1/auth/register", {
//       method: "POST",
//       body: JSON.stringify(registerData),
//     });

//     const data = await res.json();
//     console.log(data);
//   }

//   return (
//     <main className="space-y-4">
//       <div className="text-center">
//         <h1>Register</h1>
//       </div>
//       <div className="grid grid-cols-4 gap-4">
//         <input
//           type="name"
//           name="name"
//           placeholder="Name"
//           onChange={handleInputEvent}
//         />
//         <input
//           type="number"
//           name="phone_number"
//           placeholder="Phone Number"
//           onChange={handleInputEvent}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="mail@yourmail.com"
//           onChange={handleInputEvent}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleInputEvent}
//         />
//       </div>
//       <button onClick={handleRegister}>Register</button>
//     </main>
//   );
// };
