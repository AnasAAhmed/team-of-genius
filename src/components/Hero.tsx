"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Gradient } from "./ui/Gradient";

const Hero = () => {
  const [play, setPlay] = useState(false);

  return (
    <section className="max-sm:px-6">
      {/* Background */}
      <img
        fetchPriority="high"
        src="/assets/images/banner-texture.webp"
        alt="main_bg1"
        className="w-fit h-screen -z-10 absolute object-cover top-0 left-0"
        loading="eager"
      />
      <Gradient />

      {/* Main Hero Section */}
      <section className="flex max-md:flex-col max-md:items-center justify-center items-center gap-8 max-w-7xl pt-4 md:pt-10 w-full mx-auto overflow-hidden">
        {/* Left Text Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-6/12 lg:pt-16 md:pl-4 text-center md:text-left"
        >
          <div className="hero-content space-y-4.5">
            <h1 className="text-2xl sm:text-4xl font-bold sm:leading-10">
              Gain Millions of followers on your social media accounts with the
              <span className="text-[#EAB101]"> #1 AI Agent </span>
              powered&nbsp;by&nbsp;Team of Genius
            </h1>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <p className="m-0 flex items-center font-medium text-left md:text-center gap-2 text-[12px] md:text-lg text-[#EAB101]">
                Made in USA
                <img src="/assets/icons/us-flag.webp" alt="USA" className="w-4 h-4" />
                Trusted Worldwide 🌎
              </p>
            </div>
            <button className="bg-[#fec007] px-5 py-2.5 rounded-[20px] text-lg font-medium text-black">
              Start 3-days Free Trial
            </button>
          </div>
        </motion.div>

        {/* Right Video Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
          className="w-full flex justify-center md:w-6/12"
        >
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg">
            {play ? (
              <video
                src="https://teamofgenius.com/assets/banner-video.mp4"
                poster="/assets/images/hero-image.webp"
                controls
                autoPlay
                className="relative z-10 object-contain w-full h-full rounded-lg"
              />
            ) : (
              <div
                className="relative z-10 w-full h-full cursor-pointer flex items-center justify-center"
                onClick={() => setPlay(true)}
              >
                <img
                  src="/assets/images/hero-image.webp"
                  alt="play-button-home"
                  className="w-full h-full object-cover rounded-lg"
                />
                {/* Play Button Overlay */}
                <div className="absolute m-auto size-24 rounded-full inset-0 flex items-center justify-center bg-black/40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-16 h-16"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </section>

      {/* Social Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.6 }}
        className="wepublish flex justify-center items-center mt-10 sm:mt-24 z-30"
      >
        <div className="flex justify-center items-center max-w-3xl rounded-[20px] bg-secondary/40 py-4 flex-col px-2 gap-3 text-sm md:text-bold">
          <div className="text-sm text-center sm:text-lg font-medium">
            Your AI Agent That Finds, Edits &amp; Posts Viral Content – Automatically!
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            {["instagram", "youtube", "facebook", "tiktok", "x"].map((icon) => (
              <img
                key={icon}
                className="size-8"
                loading="lazy"
                src={icon==='x' ? `/assets/icons/${icon}.svg`
                  : `/assets/icons/${icon}-icon.webp`}
                alt={icon}
              />
            ))}
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default Hero;
