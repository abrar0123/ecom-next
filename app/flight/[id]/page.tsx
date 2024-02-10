"use client";
import { useRouter } from "next/navigation";

import React from "react";
const Flight = ({ params }: any) => {
  const router = useRouter();

  return (
    <div className="bg-red-50 px-20 py-6 h-screen ">
      <div className="bg-red-300 max-w-sm max-h-sm">
        Flight
        <p>Flight</p>
        <p>Flight</p>
        <p>Flight</p>
        <p>Flight</p>
        <p>Flight</p>
        <p>Flight</p>
        <button
          className="mt-5 ml-5 bg-green-500  rounded-sm px-6 py-2"
          onClick={() => {
            console.log("object");
            router.push("/metro/met");
          }}
        >
          Click to Redirect{" "}
        </button>
      </div>
    </div>
  );
};

export default Flight;
