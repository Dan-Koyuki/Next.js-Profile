"use client";
import React, { useState } from "react";
import { LinkInfo } from "../nav/top.main";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import Link from "next/link";

type BurgerMenuProps = {
  links: LinkInfo[];
};

const BurgerMenu = ({ links }: BurgerMenuProps) => {
  // ?Control State to determine Menu Condition
  const [isCollapsed, setIsCollapsed] = useState(false);

  // ?Toggle Function to change state of the Menu
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      {/* Button of the Menu */}
      <button className="text-xl" onClick={toggleCollapse}>
        {isCollapsed ? <IoMdClose size={25} /> : <IoMdMenu size={25} />}
      </button>

      {/* Modal / Menu that will be displayed when isCollapsed = true */}
      {isCollapsed && (
        <div className="absolute top-16 right-4 p-4 rounded border shadow bg-gray-500">
          {links.map((link, index) => (
            <Link className="block my-2 text-base" key={index} href={link.href}>
              {link.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
