"use client";

import React from "react";
import { Calendar, MapPin, Newspaper, ArrowRight, Clock } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";
import { NEWS, EVENTS } from "@/utils/data";
import { motion } from "framer-motion";

function DateBadge({ dateISO }) {
  const d = new Date(dateISO);
  const month = d.toLocaleString(undefined, { month: "short" });
  const day = d.getDate();
  return (
    <div className="grid h-full w-16 place-items-center border border-black/20 bg-white text-center">
      <div className="text-[10px] font-bold uppercase tracking-wider text-blue-700">
        {month}
      </div>
      <div className="text-4xl font-black text-[#23272A] leading-none">
        {day}
      </div>
    </div>
  );
}

function Segmented({ value, onChange }) {
  return (
    <div className="border border-black/20 bg-white p-1 text-sm font-semibold">
      <button
        onClick={() => onChange("news")}
        className={`inline-flex items-center gap-2 cursor-pointer px-3 py-1.5 ${
          value === "news" ? "bg-[#0281FB] text-white" : "text-[#23272A]"
        }`}
      >
        <Newspaper className="h-4 w-4" /> News
      </button>
      <button
        onClick={() => onChange("events")}
        className={`inline-flex items-center gap-2 cursor-pointer px-3 py-1.5 ${
          value === "events" ? "bg-[#0281FB] text-white" : "text-[#23272A]"
        }`}
      >
        <Calendar className="h-4 w-4" /> Events
      </button>
    </div>
  );
}

function NewsCard({ item, featured }) {
  return (
    <motion.article
      className={`group relative overflow-hidden border border-black/10 bg-white hover:border-black/30 ${
        featured && "md:col-span-2"
      } cursor-pointer group`}
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeIn" }}
    >
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt=""
          className={`w-full object-cover transition duration-300 ${
            featured ? "h-64" : "h-40"
          } group-hover:scale-105`}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="flex flex-col gap-2 p-5">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-700">
            {item.tag}
          </span>

          <time className="text-xs text-black/60">
            {new Date(item.date).toLocaleDateString()}
          </time>
        </div>
        <h3 className="text-xl font-extrabold tracking-tight text-[#23272A] md:text-2xl group-hover:text-[#3A348A]">
          {item.title}
        </h3>
        <p className="line-clamp-2 text-sm text-black/70">{item.summary}</p>
        <div className="mt-2">
          <button className="px-4 py-2 bg-transparent border border-[#0281FB] text-[#0281FB] font-semibold group flex items-center gap-3 hover:bg-[#0281FB] hover:text-white transition duration-300 cursor-pointer text-xs">
            Read Full Message
            <GoArrowUpRight
              size={20}
              className="rotate-45 group-hover:rotate-0 transition duration-300"
            />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function EventRow({ e }) {
  const d = new Date(e.date);
  const time = d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  return (
    <article className="flex items-start gap-4 border border-black/10 bg-white p-4 transition hover:-translate-y-0.5 ">
      <DateBadge dateISO={e.date} />
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-700">
            {e.type}
          </span>
        </div>
        <h3 className="mt-1 text-lg font-extrabold tracking-tight text-[#23272A]">
          {e.title}
        </h3>
        <p className="mt-1 text-sm text-black/60 flex items-center gap-3">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-4 w-4" /> {d.toLocaleDateString()} • {time}
          </span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-4 w-4" /> {e.location}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-4 w-4" /> {e.duration}
          </span>
        </p>
        <div className="mt-2 flex gap-2">
          <a
            href={e.href}
            className="inline-flex items-center gap-2 border border-[#0281FB] bg-[#0281FB] hover:bg-[#006ace] px-3 py-1.5 text-xs font-semibold text-white"
          >
            Register <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-black/10 bg-white px-3 py-1.5 text-xs font-semibold hover:border-black/30"
          >
            Add to calendar
          </a>
        </div>
      </div>
    </article>
  );
}

export default function NewsEvents() {
  const [tab, setTab] = React.useState("news");

  return (
    <section
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby="news-events"
    >
      <div className="mb-10 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <span className="bg-transparent rounded-full px-4 py-2 text-xs text-[#0281FB] font-semibold mb-5 border border-[#0281FB]">
              ✶&nbsp;&nbsp;NEWS & EVENTS
            </span>
            <h2
              id="news-events"
              className="mt-4 text-4xl font-black tracking-tight text-[#23272A] md:text-5xl"
            >
              Department Updates
            </h2>
          </motion.div>
          <p className="mt-3 max-w-2xl text-base text-black/70">
            Recent highlights and what's happening next - from research wins to
            public talks.
          </p>
        </div>
        <Segmented value={tab} onChange={setTab} />
      </div>

      {tab === "news" ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {NEWS.map((n, i) => (
            <NewsCard key={n.id} item={n} featured={i === 0} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {EVENTS.map((e) => (
            <EventRow key={e.id} e={e} />
          ))}
        </div>
      )}

      <div className="mt-10 flex items-center justify-center gap-3">
        <a
          href="#"
          className="inline-flex items-center gap-2 border border-[#0281FB] bg-[#0281FB] px-4 py-2 text-sm font-semibold text-white hover:bg-transparent hover:text-[#0281FB] transition duration-150"
        >
          View all news <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-2 border border-black/10 bg-white px-4 py-2 text-sm font-semibold hover:border-black/30 transition duration-150"
        >
          Full events calendar
        </a>
      </div>
    </section>
  );
}
