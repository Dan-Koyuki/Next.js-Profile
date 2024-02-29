import Link from "next/link";
import React from "react";
import { FaDiscord, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <h1 className="text-4xl p-2 border-gray-600 rounded-2xl  w-full text-center font-extrabold">
        About
      </h1>
      <div className="my-2 flex flex-col items-center text-lg">
        <div className="flex flex-col items-center justify-center border-double border-8 p-5 w-fit rounded-lg mb-4">
          <p>Initialize! Thrive!</p>
          <p>A Code to the Program turns to take off toward a dream!</p>
        </div>
        <div className="flex flex-row items-center justify-center text-center mt-5 text-lg">
          <div className="w-5/12 mr-3 text-left ml-4">
            <p>
              {`Hello, I\'m Irwanto Danang Bahtiar.`}
            </p>
            <p>
              Originally from Majalengka, currently pursuing my studies in
              Informatics at Sunan Gunung Djati State Islamic University Bandung.
            </p>
            <p>
              I thrive on the challenges that programming presents, constantly
              seeking to refine my skills and broaden my horizons.
            </p>
            <p>
              The prospect of creating innovative web and mobile solutions
              exhilarates me, driving my commitment to contribute meaningfully to
              this ever-evolving field.
            </p>
          </div>
          <div className="w-5/12 ml-3 text-left mr-2">
            <p>{`Let\'s Connect!`}</p>
            <p>{`I\'m genuinely honored at the prospect of working together. Each chance is a priceless learning experience for me, and I\'m dedicated to ongoing growth and learning to attain optimal outcomes.`}</p>
            <p className="mt-4 ">Phone: <Link className="text-blue-400" href={"https://wa.me/6282116424576"}>+62 821-1642-4576</Link></p>
            <p className="mt-4 ">Email: <Link className="text-blue-400" href={"mailto:dankoyuki398@gmail.com"}>dankoyuki398@gmail.com</Link></p>
            <div className="flex flex-row items-center justify-center mt-4">
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
                href={"https://www.instagram.com/dkoyuki/"}
              >
                <FaInstagram size={25}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
