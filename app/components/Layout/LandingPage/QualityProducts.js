"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "../../../styles/customStyles.css";

const images = [
  "/Images/tentwenty-farms1.jpeg",
  "/Images/tentwenty-farms2.png",
  "/Images/tentwenty-farms3.png",
  "/Images/tentwenty-farms4.png",
];

const clients = [
  { name: "Client 1", location: "Dubai, United Arab Emirates" },
  { name: "Client 2", location: "London, United Kingdom" },
  { name: "Client 3", location: "New York, USA" },
  { name: "Client 4", location: "Sydney, Australia" },
];

const QualityProducts = () => {
  if (!images || images.length === 0) return <p>No images available</p>;

  const [currentIndex, setCurrentIndex] = useState(1);

  const startX = useRef(0);
  const isDragging = useRef(false);

  const handleStart = (e) => {
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
    isDragging.current = true;
  };

  const handleMove = (e) => {
    if (!isDragging.current) return;
    const moveX =
      (e.touches ? e.touches[0].clientX : e.clientX) - startX.current;

    if (moveX > 50) {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      isDragging.current = false;
    } else if (moveX < -50) {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      isDragging.current = false;
    }
  };

  const handleEnd = () => {
    isDragging.current = false;
  };

  return (
    <div
      className="relative flex flex-col items-center text-center py-10 w-full overflow-hidden md:mt-20"
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
    >
      <h2 className="text-2xl md:text-6xl md:mt-8">Quality Products</h2>

      <p className="text-gray-500 max-w-4xl mt-2 text-xs md:text-2xl px-15 md:px-4 md:mb-20 md:mt-12">
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <div className="relative w-full flex justify-center items-center mt-6">
        <div className="absolute left-[-4%] sm:left-0 top-1 sm:top-12 w-[25%] sm:w-1/4 h-[203px] sm:h-[500px] shadow-lg transform -rotate-6 overflow-hidden">
          <Image
            src={images[(currentIndex - 1 + images.length) % images.length]}
            alt="Previous Image"
            width={500}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>

        <motion.div className="relative w-2/5  lg:w-5/20 h-[200px] sm:h-[500px] shadow-lg z-10 cursor-pointer">
          <Image
            src={images[currentIndex]}
            alt="Current Image"
            width={500}
            height={600}
            className="object-cover h-full"
          />
        </motion.div>

        <div className="absolute right-[-4%] sm:right-0 top-1 sm:top-12 w-[25%] sm:w-1/4 h-[203px] sm:h-[500px] shadow-lg transform rotate-6 overflow-hidden">
          <Image
            src={images[(currentIndex + 1) % images.length]}
            alt="Next Image"
            width={500}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <motion.div
        className="mt-4 mb-20"
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="font-normal text-3xl md:text-4xl mt-10 mb-5">
          {clients[currentIndex].name}
        </h3>
        <p className="text-gray-500 font-normal text-1xl md:text-2xl">
          {clients[currentIndex].location}
        </p>
      </motion.div>
    </div>
  );
};

export default QualityProducts;
