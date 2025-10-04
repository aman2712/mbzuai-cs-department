"use client";

import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="w-screen bg-center bg-cover flex flex-col mt-20 justify-center px-32 max-w-2/3 ">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <h1 className="text-7xl font-semibold pt-10 text-white leading-[70px]">
          Welcome to the Department of
          <br />
          <span className="text-[#0281FB]">Computer Science</span>
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <p className="text-white/90 max-w-xl mt-8">
          We are advancing the frontiers of artificial intelligence and computer
          science through groundbreaking research and innovative education
        </p>
        <div className="flex items-center gap-10 mt-10">
          <button className="px-6 py-2 border-2 bg-[#0281FB] border-[#0281FB] text-white font-semibold group flex items-center gap-3 hover:bg-[#0283fb73] transition duration-300 cursor-pointer">
            Visit Our Blog
            <GoArrowUpRight
              size={20}
              className="rotate-45 group-hover:rotate-0 transition duration-300"
            />
          </button>
          <button className="px-6 py-2 border-2 bg-[#0281FB] border-[#0281FB] text-white font-semibold group flex items-center gap-3 hover:bg-[#0283fb73] transition duration-300 cursor-pointer">
            Meet The Faculty
          </button>
        </div>
      </motion.div>
    </div>
  );
}
