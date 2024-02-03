import Link from "next/link";
import React from "react";

interface LinkInfo {
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
    { text: "Cryo-Legion", href: "/#" },
    { text: "Schedule", href: "/schedule" },
    { text: "Report", href: "/college-report" }, // this is for like my score result, not reporting me to my college ;-;
  ];

  return (
    <div className="w-screen py-2 px-4 flex flex-row items-center justify-between">
      <Link className="flex flex-row items-center" href={"home"}>
        <img
          className="h-12 mr-4"
          src="https://res.cloudinary.com/dankoyuki/image/upload/v1706862368/Custom%20Card/l3dulnz3rs8j8gnaydnj.png"
          alt="logo"
        />
        <p>Dan Koyuki</p>
      </Link>

      <div>
        {landingLink.map((link, index) => (
          <Link className="mx-2" key={index} href={link.href}>
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Top;
