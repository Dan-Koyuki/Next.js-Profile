"use client";
import { useRouter } from "next/navigation";
import React from "react";

const AccessButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/home");
  };

  return (
    <div className="flex flex-row items-center justify-center">
      <button onClick={handleClick}>
        <img
          className="max-w-3xl h-auto my-7"
          src="https://res.cloudinary.com/dankoyuki/image/upload/v1706920955/Custom%20Card/jdwnawopttpwalgti3vv.png"
        />
      </button>
    </div>
  );
};

export default AccessButton;
