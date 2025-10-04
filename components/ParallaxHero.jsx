"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxHero({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const overlay = useTransform(scrollYProgress, [0, 1], [1, 0.75]);

  return (
    <section ref={ref} className="relative h-[50rem] overflow-hidden">
      <motion.div
        style={{ y: yImg }}
        className="absolute inset-0 will-change-transform"
        aria-hidden
      >
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url(/hero-bg.jpg)" }}
        />
        <motion.div
          style={{ opacity: overlay }}
          className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.6))]"
        />
      </motion.div>

      <div className="relative z-10">{children}</div>
    </section>
  );
}
