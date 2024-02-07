'use client'
// components/ScrollLink.tsx
import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";
// mirror the props of next/link component
type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>;
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;
// component definition
const ScrollLink = ({ children, ...props }: ScrollLinkProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    // Remove everything before the hash
    const targetId = e.currentTarget.href.replace(/.*\#/, "");
    const elem: HTMLElement | null = document.getElementById(targetId);
    if (elem) {
      const targetOffset = elem.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: targetOffset - 65, // Adjust the scroll position relative to the current scroll position
        behavior: "smooth",
      });
    }
  };
  return (
    <Link {...props} onClick={handleScroll}>
      {children}
    </Link>
  );
};
export default ScrollLink;
