import Image from 'next/image';
import ScrollLink from '../utils/ScrollLink.utils';
import { LinkInfo } from './top.main';
import BurgerMenu from '../utils/burger-menu.utils';
import Link from 'next/link';

const TopHome = () => {

  const mainLink: LinkInfo[] = [
    { text: "About", href: "#about-section" },
    { text: "Skill", href: "#skill-section" },
    { text: "Portfolio", href: "#portfolio-section" },
    { text: "Contact", href: "#contact-section" },
  ];

  const links: LinkInfo[] = [
    { text: "Resume", href: "/resume" },
    { text: "Coming Soon", href: "/#" },
  ];

  return (
    <div className="sticky z-50 top-0 bg-black py-2 px-4 flex flex-row items-center justify-between font-Orbitron">
      <ScrollLink
        className="flex flex-row items-center"
        href={"#intro-section"}
      >
        <Image
          className=" w-12 h-12 mr-4"
          src="https://res.cloudinary.com/dankoyuki/image/upload/v1706862368/Custom%20Card/l3dulnz3rs8j8gnaydnj.png"
          alt="logo"
          width={2048}
          height={2048}
          priority={true}
        />
        <p className="hidden md:block text-2xl font-bold">Dan Koyuki</p>
      </ScrollLink>

      <div className="lg:flex lg:flex-row lg:mx-5 hidden">
        {mainLink.map((link, index) => (
          <ScrollLink className="mx-3 text-base" key={index} href={link.href}>
            {link.text}
          </ScrollLink>
        ))}
        {links.map((link, index) => (
          <Link className="mx-3 text-base" key={index} href={link.href}>
            {link.text}
          </Link>
        ))}
      </div>

      <div className="sm: block lg:hidden">
        <BurgerMenu links={mainLink} links2={links} />
      </div>
    </div>
  );
}

export default TopHome