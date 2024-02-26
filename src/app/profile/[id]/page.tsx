import React from "react";

const ProfilePage = ({ params }: any) => {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-300 ">
      <h1>
        Welcome to Profile page
        <span className="bg-orange-500 ml-4 px-10 py-2">{params.id}</span>
      </h1>
    </div>
  );
};

export default ProfilePage;
