import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <div>
        <Profile />
      </div>
    </>
  );
};

export default page;
