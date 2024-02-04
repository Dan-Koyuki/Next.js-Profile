"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoVolumeHighOutline, IoVolumeMuteOutline } from "react-icons/io5";

const AccessButton = () => {
  const router = useRouter();
  const [volume, setVolume] = useState<number>(0.8);
  const [isAudio, setAudio] = useState<boolean>(true);
  const [isBookOpen, setBookOpen] = useState<boolean>(false);
  
  const audio = typeof Audio !== 'undefined' ? new Audio("/audio/Authorize.mp3") : null; // Check if Audio is defined

  const handleClick = () => {
    setBookOpen(!isBookOpen);
    if (isAudio && audio) {
      audio.volume = volume;
      audio.play(); // corrected method invocation
      setTimeout(() => {
        router.push('home');
      }, 1000);
    } else {
      router.push('home');
    }
  };

  const handleVolume = () => {
    if (isAudio) {
      setAudio(false);
      setVolume(0);
    } else {
      setAudio(true);
      setVolume(0.8);
    }
  }

  return (
    <div className="flex flex-row items-center justify-center">
      <button onClick={handleClick}>
        <img
          className="max-w-6xl mt-4 h-auto transform transition-transform duration-500"
          src={isBookOpen ? "https://res.cloudinary.com/dankoyuki/image/upload/v1707006754/Custom%20Card/kxhizlnfaoh5qixjqjj5.png" : "https://res.cloudinary.com/dankoyuki/image/upload/v1707006582/Custom%20Card/ighnivchvuglgvpqjyxz.png"}
          alt="Access Button"
          // style={{ transform: isBookOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      <button className="absolute top-0 right-0 m-12 z-10" onClick={handleVolume}>
        {isAudio ? <IoVolumeHighOutline size={60} /> : <IoVolumeMuteOutline size={60} />}
      </button>
    </div>
  );
};

export default AccessButton;

