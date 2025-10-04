"use client";

import React from "react";
import { Quote, Mail, Linkedin } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";
import { CHAIR } from "@/utils/data";
import { motion } from "framer-motion";

export default function ChairsMessage() {
  return (
    <section className="px-32 pt-16 pb-24 bg-[#D1DCE1]">
      <div className="mb-10 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <span className="bg-transparent rounded-full px-4 py-2 text-xs text-[#0281FB] font-semibold mb-5 border border-[#0281FB]">
              ✶&nbsp;&nbsp;CHAIR'S MESSAGE
            </span>
            <h2
              id="chairs-message"
              className="mt-4 text-4xl font-black tracking-tight text-[#23272A] md:text-5xl"
            >
              From the Department Chair
            </h2>
            <p className="mt-3 max-w-2xl text-base text-black/70">
              A note on our mission, priorities, and the road ahead.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="relative overflow-hidden border border-black/10 bg-white shadow-sm">
        <div className="grid grid-cols-1 gap-0 md:grid-cols-12">
          <div className="relative md:col-span-4">
            <img
              src={CHAIR.portrait}
              alt={CHAIR.name}
              className="h-80 w-full object-cover md:h-full"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
          </div>

          <div className="md:col-span-8 p-6 md:p-10">
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xl font-semibold text-[#23272A]">
                    {CHAIR.name}
                  </p>
                  <p className="text-sm text-black/60">{CHAIR.title}</p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${CHAIR.email}`}
                    className="inline-flex items-center gap-2 border border-black/10 bg-white px-3 py-1.5 text-xs font-semibold hover:text-blue-700"
                  >
                    <Mail className="h-4 w-4" /> Email
                  </a>
                  <a
                    href={CHAIR.linkedin}
                    className="inline-flex items-center gap-2 border border-black/10 bg-white px-3 py-1.5 text-xs font-semibold hover:text-blue-700"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                {CHAIR.stats.map((s) => (
                  <div
                    key={s.label}
                    className="border border-black/10 bg-slate-50 p-4"
                  >
                    <div className="flex items-center gap-3">
                      {React.createElement(s.icon, {
                        className: "h-5 w-5 text-[#0281FB]",
                      })}
                      <p className="text-sm text-black/60">{s.label}</p>
                    </div>
                    <p className="mt-2 text-2xl font-black text-[#23272A]">
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="mt-8 space-y-5">
              <div className="border border-blue-200 bg-[#0eb7ff18] p-5">
                <blockquote className="relative text-[#23272A]">
                  <Quote className="absolute -left-1 -top-1 h-6 w-6 text-[#0281FB]" />
                  <p className="pl-7 text-lg leading-relaxed">{CHAIR.intro}</p>
                </blockquote>
              </div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <p className="text-black/80">{CHAIR.message}</p>
                <div className="mt-6">
                  <p className="font-medium text-[#23272A]">{CHAIR.name}</p>
                  <p className="text-xs text-black/60">{CHAIR.title}</p>
                </div>

                <button className="px-6 py-2 mt-6 bg-transparent border-2 border-[#0281FB] text-[#0281FB] font-semibold group flex items-center gap-3 hover:bg-[#0281FB] hover:text-white transition duration-300 cursor-pointer text-sm">
                  Read Full Message
                  <GoArrowUpRight
                    size={20}
                    className="rotate-45 group-hover:rotate-0 transition duration-300"
                  />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
