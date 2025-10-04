"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { faculty } from "@/utils/data";
import { motion } from "framer-motion";

export default function Faculty() {
  return (
    <section className="py-20 px-32 bg-[#D1DCE1]">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <p className="rounded-full px-4 py-2 text-xs text-[#0281FB] font-semibold mb-5 border border-[#0281FB] text-center mx-auto max-w-fit">
          ✶&nbsp;&nbsp;FACULTY
        </p>
        <h2 className="text-5xl font-semibold mt-8 text-center">
          Meet the people who make it possible
        </h2>
      </motion.div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        className="mt-16"
      >
        {faculty.map((d, i) => (
          <SwiperSlide key={i}>
            <div className="cursor-pointer group">
              <div className="h-96 overflow-hidden mb-4">
                <img
                  src={d.image}
                  alt="Faculty Member 1"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="text-2xl font-semibold">{d.name}</h3>
              <p className="text-gray-600">{d.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
