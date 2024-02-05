import Image from 'next/image';
import ScrollLink from '../utils/ScrollLink';
import BurgerMenu from '../utils/burger-menu';
import { LinkInfo } from './top';

const TopHome = () => {

  const mainLink: LinkInfo[] = [
    { text: "About", href: "#about-section" },
    { text: "Skill", href: "#skill-section" },
    { text: "Portfolio", href: "#portfolio-section" },
    { text: "Contact", href: "#contact-section" },
  ];

  return (
    <div className="sticky top-0 bg-black py-2 px-4 flex flex-row items-center justify-between font-Orbitron">
      <ScrollLink className="flex flex-row items-center" href={"#intro-section"}>
        <Image
          className=" w-12 h-12 mr-4"
          src="https://res.cloudinary.com/dankoyuki/image/upload/v1706862368/Custom%20Card/l3dulnz3rs8j8gnaydnj.png"
          alt="logo"
          width={2048}
          height={2048}
          priority={true}
        />
        <p className="hidden lg:block text-2xl font-bold">Dan Koyuki</p>
      </ScrollLink>

      <div className='flex flex-row mx-5'>
        {mainLink.map((link, index) => (
          <ScrollLink className="mx-3 text-base" key={index} href={link.href}>
            {link.text}
          </ScrollLink>
        ))}

        {/* collapse menu, burger menu or whatever is it */}
        <BurgerMenu />
      </div>
    </div>
  )
}

export default TopHome