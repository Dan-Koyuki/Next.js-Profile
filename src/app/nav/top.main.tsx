import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface LinkInfo {
  text: string;
  href: string;
}

const Top = () => {
  // const homeSection: LinkInfo[] = [
  //   { text: "About", href: "about-section" },
  //   { text: "Skill", href: "skill-section" },
  //   { text: "Portfolio", href: "portfolio-section" },
  //   { text: "Contact", href: "contact-section" },
  // ];

  const landingLink: LinkInfo[] = [
    { text: "Resume", href: "/resume" },
    { text: "Coming Soon", href: "/#" }
  ];

  return (
    <div className="w-screen py-2 px-4 flex flex-row items-center justify-between font-Orbitron">
      <Link className="flex flex-row items-center" href={"home"}>
        <Image
          className="w-12 h-12 mr-4"
          src="https://res.cloudinary.com/dankoyuki/image/upload/v1706862368/Custom%20Card/l3dulnz3rs8j8gnaydnj.png"
          alt="logo"
          width={2048}
          height={2048}
          priority={true}
        />
        <p className="hidden md:block text-2xl font-bold">Dan Koyuki</p>
      </Link>

      <div>
        {landingLink.map((link, index) => (
          <Link className="mx-2 text-base" key={index} href={link.href}>
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Top;
