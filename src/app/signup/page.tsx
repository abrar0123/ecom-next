"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import NavBar from "../(components)/NavBar";
import { useSelector } from "react-redux";

const Signup = () => {
  const s = useSelector((state) => state.cart.name);
  const [user, setuser] = useState({
    email: "test1@test.com",
    username: "test1",
    password: "test1",
    check: false,
  });

  const router = useRouter();

  const registerApi = async () => {
    try {
      console.log("run 1 ");
      const res = await fetch("http://localhost:3000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("user ==> ", res);
      // router.push("/login");
    } catch (error) {
      console.log("error ", error);
    }
  };

  const submitHandler = () => {
    // e.preventDefault();
    console.log("pressed");
    if (user.email && user.password && user.username) {
      registerApi();
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
            value={user.username}
            onChange={(e) => setuser({ ...user, username: e.target.value })}
          />
        </div>
        {/* 2 */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setuser({ ...user, email: e.target.value })}
          />
        </div>
        {/* 2 ==> password */}
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
            value={user.password}
            onChange={(e) => setuser({ ...user, password: e.target.value })}
            placeholder=" ******** "
          />
        </div>
        <div className="flex items-center justify-between">
          <p>{user.email}</p>
          <p>{user.username}</p>
          <p>{user.password}</p>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 active:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
