'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";

type CarouselProps = {
  images: string[];
  imageClass: string;
  imageWidth: number;
  imageHeight: number;
  containerClass: string;
  itemPerSlide: number;
};

const Carousel = ({
  images,
  imageHeight,
  imageWidth,
  containerClass,
  imageClass,
  itemPerSlide,
}: CarouselProps) => {

  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(images.length / itemPerSlide);

  const startIndex = currentPage * itemPerSlide;
  const slicedImages = images.slice(startIndex, startIndex + itemPerSlide);
  const onRight = () => {
    if (currentPage + 1 < totalPages){
      setCurrentPage(currentPage + 1);
    }
    console.log("hello");
  }
  const onLeft = () => {
    if (currentPage - 1 >= 0) {
      setCurrentPage(currentPage - 1);
    }
    console.log("hello");
  };

  useEffect(() => {
    setCurrentPage(0);
  }, [images])

  return (
    <div className={`${containerClass}`}>
      <div className="flex flex-wrap items-center justify-center gap-4 w-full p-3">
        {slicedImages.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={image}
              className={`${imageClass}`}
              width={imageWidth}
              height={imageHeight}
              priority={true}
            />
          </div>
        ))}
      </div>
      <button onClick={onLeft} className="absolute border z-10 left-4">
        Left
      </button>
      <button onClick={onRight} className="absolute border z-10 right-4">
        Right
      </button>
    </div>
  );
};

export default Carousel;
