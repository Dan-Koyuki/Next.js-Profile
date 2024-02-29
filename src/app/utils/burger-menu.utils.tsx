'use client'
import React, { useState } from 'react'
import { LinkInfo } from '../nav/top.main';
import Link from 'next/link';
import { IoMdMenu, IoMdClose } from "react-icons/io";

const BurgerMenu = () => {

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const collapseLink: LinkInfo[] = [
    { text: "Resume", href: "/resume" },
    { text: "Coming Soon", href: "/#" },
    // { text: "College", href: "/college" }, // this is for like my score result, not reporting me to my college ;-;
  ];

  return (
    <div>
      <button className="text-xl" onClick={toggleCollapse}>
        {isCollapsed ? <IoMdClose size={25}/> : <IoMdMenu size={25} />}
      </button>

      {/* Collapsed menu items */}
      {isCollapsed && (
        <div className="absolute top-16 right-4 p-4 rounded border shadow bg-gray-500">
          {collapseLink.map((link, index) => (
            <Link
              className="block my-2 text-base"
              key={index}
              href={link.href}
            >
              {link.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default BurgerMenu