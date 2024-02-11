"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Signup = () => {
  const [registerUser, setregisterUser] = useState({
    email: "",
    password: "",
    check: false,
  });

  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("e", e);
    if (registerUser.email && registerUser.password) {
      //   router
    }
  };

  return (
    <div className="flex justify-center mt-28">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-1/2 lg:w-1/3">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={registerUser.email}
            onChange={(e) =>
              setregisterUser({ ...registerUser, email: e.target.value })
            }
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={registerUser.password}
            onChange={(e) =>
              setregisterUser({ ...registerUser, password: e.target.value })
            }
            placeholder="********"
          />
        </div>
        <div className="flex items-center justify-between">
          <p>{registerUser.email}</p>
          <p>{registerUser.password}</p>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={submitHandler}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
