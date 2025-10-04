"use client";

import React from "react";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";
import { POSTS } from "@/utils/data";
import { motion } from "framer-motion";

function Badge({ label }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-slate-200 text-slate-700 px-2.5 py-1 text-[10px] uppercase tracking-wider">
      <Tag className="h-3 w-3" /> {label}
    </span>
  );
}

function Author({ name, avatar }) {
  return (
    <div className="flex items-center gap-2">
      <img
        src={avatar}
        alt={name}
        className="h-6 w-6 rounded-full border border-black/10 object-cover"
      />
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}

function Meta({ date, readMins }) {
  return (
    <div className="mt-2 flex items-center gap-4 text-xs text-black/50">
      <span className="inline-flex items-center gap-1">
        <Calendar className="h-3.5 w-3.5" />
        {new Date(date).toLocaleDateString()}
      </span>
      <span className="inline-flex items-center gap-1">
        <Clock className="h-3.5 w-3.5" />
        {readMins} min read
      </span>
    </div>
  );
}

export default function Blog() {
  return (
    <section className="mx-auto max-w-7xl py-16">
      <div className="mb-10 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <span className="bg-transparent rounded-full px-4 py-2 text-xs text-[#0281FB] font-semibold mb-5 border border-[#0281FB]">
            ✶&nbsp;&nbsp;BLOG
          </span>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl text-[#3A348A]">
            From the Computer Science Blog
          </h2>
          <p className="mt-3 max-w-2xl text-base text-black/70">
            Stories from our researchers, faculty, and students - covering AI,
            systems, human-computer interaction, and the people who make it all
            possible.
          </p>
        </motion.div>
      </div>

      <div className="divide-y divide-black/10 overflow-hidden rounded-2xl border border-black/10 ">
        {POSTS.map((post) => (
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: (Number(post.id) + 1) * 0.1,
            }}
            key={post.id}
            className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3 group cursor-pointer"
          >
            <img
              src={post.cover}
              alt=""
              className="h-44 w-full rounded-xl object-cover md:col-span-1"
            />
            <div className="md:col-span-2">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <Badge key={t} label={t} />
                ))}
              </div>
              <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-[#445B65] group-hover:text-[#3A348A] transition duration-150">
                {post.title}
              </h3>
              <p className="mt-2 max-w-3xl text-black/70">{post.excerpt}</p>
              <Meta date={post.date} readMins={post.readMins} />
              <div className="mt-4 flex items-center justify-between">
                <Author name={post.author.name} avatar={post.author.avatar} />
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-semibold group-hover:text-[#0281FB] transition duration-150"
                >
                  Read article <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center">
        <button className="px-6 py-2 bg-transparent border-2 border-[#0281FB] text-[#0281FB] font-semibold mt-6 group flex items-center gap-3 hover:bg-[#0281FB] hover:text-white transition duration-300 cursor-pointer">
          Visit Our Blog
          <GoArrowUpRight
            size={20}
            className="rotate-45 group-hover:rotate-0 transition duration-300"
          />
        </button>
      </div>
    </section>
  );
}
