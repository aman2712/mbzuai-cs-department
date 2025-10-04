"use client";

import AboutImage from "../public/about-image.jpg";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="flex items-center py-18 px-32">
      <div className="flex-[0.5]">
        <img
          src={AboutImage.src}
          alt="About Image | MBZUAI CS Department"
          className="w-full h-[35rem] object-cover"
        />
      </div>
      <div className="flex-[0.5] p-10">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <span className="bg-transparent rounded-full px-4 py-2 text-xs text-[#0281FB] font-semibold mb-5 border border-[#0281FB]">
            ✶&nbsp;&nbsp;ABOUT US
          </span>
          <h2 className="text-5xl font-semibold mt-8 text-[#3A348A]">
            Why Computer Science?
          </h2>
        </motion.div>
        <p className="mt-10">
          Computer Science is an exciting, challenging, and growing field that
          impacts the world and everyday life in countless ways.
          <br />
          <br />
          Computer scientists are involved in creating technology and systems
          that are used in a wide range of industries, including medicine,
          communications, entertainment, manufacturing, business, and science.
          CS research pushes the state-of-the-art in computing theory and
          practice, and it leads to new technologies that change the world.
          <br />
          <br />
          Despite all the impressive achievements of the field, we are convinced
          that there are many more exciting discoveries and applications of
          computer science yet to come, and you can be part of this process of
          exploration, discovery, and invention!
        </p>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <button className="px-6 py-2 bg-transparent border-2 border-[#0281FB] text-[#0281FB] font-semibold mt-6 group flex items-center gap-3 hover:bg-[#0281FB] hover:text-white transition duration-300 cursor-pointer">
            Read More
            <GoArrowUpRight
              size={20}
              className="rotate-45 group-hover:rotate-0 transition duration-300"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
