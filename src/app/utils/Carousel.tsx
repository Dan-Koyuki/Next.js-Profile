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

  const onRight = () => {
    if (currentPage < (images.length - itemPerSlide)){
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const onLeft = () => {
    if (currentPage > 0){
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    setCurrentPage(0);
  }, [images])

  const startIndex = currentPage;
  const endIndex = Math.min(startIndex + itemPerSlide, images.length);

  return (
    <div className={`${containerClass}`}>
      <div className="flex flex-wrap items-center justify-center gap-4 w-full p-3">
        {images.slice(startIndex, endIndex).map((image, index) => (
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
