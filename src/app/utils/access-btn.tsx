"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoVolumeHighOutline, IoVolumeMuteOutline } from "react-icons/io5";

const AccessButton = () => {
  const router = useRouter();
  const [volume, setVolume] = useState<number>(0.8);
  const [isAudio, setAudio] = useState<boolean>(true);
  
  const audio = new Audio("/audio/Authorize.mp3");

  const handleClick = () => {
    if (isAudio) {
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
          className="max-w-2xl h-auto"
          src="https://res.cloudinary.com/dankoyuki/image/upload/v1706972854/Custom%20Card/nqvcpsw2d6zshpjiznyk.png"
          alt="Access Button"
        />
      </button>
      <button className="absolute top-0 right-0 m-12 z-10" onClick={handleVolume}>
        {isAudio ? <IoVolumeHighOutline size={60} /> : <IoVolumeMuteOutline size={60} />}
      </button>
    </div>
  );
};

export default AccessButton;
