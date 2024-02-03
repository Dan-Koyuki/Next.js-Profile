import React from "react";
import { FaDiscord, FaFacebook, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";

const Bot = () => {
  return (
    <div className="fixed bottom-0 flex flex-col items-center justify-center w-screen py-2 px-4">
      <p>Contact Me at</p>
      <div className="flex flex-row my-3">
        <Link
          className="mx-2 border border-white rounded-full p-1"
          href={"https://wa.me/6282116424576"}
        >
          <IoLogoWhatsapp size={25} />
        </Link>
        <Link
          className="mx-2 border border-white rounded-full p-1"
          href={"https://www.facebook.com/profile.php?id=100008502968364"}
        >
          <FaFacebook size={25} />
        </Link>
        <Link
          className="mx-2 border border-white rounded-full p-1"
          href={"https://discord.gg/avGSJe448r"}
        >
          <FaDiscord size={25} />
        </Link>
        <Link
          className="mx-2 border border-white rounded-full p-1"
          href={"https://github.com/Dan-Koyuki"}
        >
          <FaGithub size={25} />
        </Link>
        <Link
          className="mx-2 border border-white rounded-full p-1"
          href={"mailto:dankoyuki398@gmail.com"}
        >
          <SiGmail size={25} />
        </Link>
      </div>
      {/* List of Platform */}
      <p>Created by Dan Koyuki</p>
    </div>
  );
};

export default Bot;
