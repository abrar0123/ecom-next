"use client";
import React, { useState } from "react";

const Signup = () => {
  const [registerUser, setregisterUser] = useState({
    email: "",
    password: "",
    check: false,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("e", e);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="bg-red-100 flex ">
        <input type="text" name="" id="" />
        <input type="text" name="" id="" />
      </div>
    </form>
  );
};

export default Signup;
