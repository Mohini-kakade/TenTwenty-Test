"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "../../Navbar/Navbar";
import { motion } from "framer-motion";

// List of images used for the banner
const images = [
  "/Images/image1.jpeg",
  "/Images/image2.png",
  "/Images/image3.png",
  "/Images/image4.png",
];

// Border animation for the next image preview
const borderAnimation = {
  initial: { clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)" },
  animate: {
    clipPath: [
      "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
      "polygon(100% 0%, 100% 100%, 100% 100%, 0% 100%)",
      "polygon(100% 100%, 0% 100%, 0% 100%, 0% 100%)",
      "polygon(0% 100%, 0% 100%, 0% 0%, 0% 0%)",
    ],
    transition: { duration: 8, ease: "easeInOut", repeat: Infinity },
  },
};

const Banner = () => {
  const [index, setIndex] = useState(0); // Current image index
  const [prevIndex, setPrevIndex] = useState(0); // Previous image index
  const [hasInteracted, setHasInteracted] = useState(false); // Tracks if user has interacted

  // Function to go to the next image
  const handleNext = () => {
    setPrevIndex(index);
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
    setHasInteracted(true);
  };

  return (
    <div className="relative w-full h-screen">
      {/* Navbar */}
      <div className="p-0 sm:px-4 sm:pt-4">
        <Navbar />
      </div>

      {/* Background Image Section */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Previous Image */}
        <Image
          src={images[prevIndex]}
          alt="Previous Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 w-full h-full"
        />

        {/* Fading transition effect when user interacts */}
        {hasInteracted && (
          <motion.div
            key={index}
            initial={{ clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)", opacity: 0 }}
            animate={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={images[index]}
              alt="Farm Background"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </motion.div>
        )}
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center md:items-start sm:items-center text-white px-6 md:px-20">
        <p className="text-sm md:text-lg uppercase tracking-wide">Welcome To TenTwenty Farms</p>
        <h1 className="text-4xl md:text-6xl leading-tight">From Our Farms <br /> To Your Hands</h1>
      </div>

      {/* Next Image Preview and Navigation */}
      <div className="absolute bottom-10 left-8 md:left-23 flex items-center space-x-6">
        {/* Next Image Thumbnail with Animation */}
        <div
          className="relative flex items-center justify-center p-6 cursor-pointer"
          style={{ border: "1px solid rgba(238, 244, 249, 0.2)" }}
          onClick={handleNext}
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-full border-4 border-white"
            variants={borderAnimation}
            initial="initial"
            animate="animate"
          ></motion.div>
          <div className="relative w-20 h-20">
            <Image
              src={images[(index + 1) % images.length]}
              alt="Next Thumbnail"
              layout="fill"
              objectFit="cover"
            />
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs">Next</p>
          </div>
        </div>

        {/* Image Counter */}
        <div className="text-white flex items-center space-x-2 text-sm">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <div className="w-20 border-t" style={{ borderColor: "#EEF4F9" }}></div>
          <span>04</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;