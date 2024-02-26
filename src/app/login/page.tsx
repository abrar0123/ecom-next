"use client";

import React from "react";
import { useState } from "react";
import { useAuthLoginMutation } from "../store/authApi";
import toast from "react-hot-toast/headless";
import { useRouter } from "next/navigation";

const Login = () => {
  const [user, setuser] = useState({
    username: "test1",
    password: "test1",
  });
  const [authLogin, { data, isLoading }] = useAuthLoginMutation();
  const router = useRouter();
  const loginHandler = async () => {
    try {
      console.log("run test");
      const res = await authLogin({ details: user });
      console.log("user ==> ", res);
      if (res.data.status == 200) {
        router.push("/home");
      }
    } catch (error) {
      console.log("error ", error);
    }
  };

  return (
    <>
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
            <p>{user.username}</p>
            <p>{user.password}</p>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 active:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={loginHandler}
            >
              {isLoading ? "load..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
