"use client";

import React from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedinIn, FaXTwitter, FaYoutube, FaGithub } from "react-icons/fa6";
import { quickLinks, resources } from "@/utils/data";

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-sm text-white/80 transition hover:text-white"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-[#445B65] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl ">
              Let's build the future together
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-white/70">
              Research, teaching, and community at the intersection of
              algorithms, systems, and intelligence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-lg font-black">
                CS
              </div>
              <div>
                <p className="text-sm font-semibold tracking-wide text-[#0EB8FF]">
                  Mohamed bin Zayed University of Artificial Intelligence
                </p>
                <p className="text-sm text-white/60">
                  Department of Computer Science
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm text-white/70">
              Subscribe for monthly highlights: research breakthroughs, events,
              and student stories.
            </p>

            <div className="mt-4 flex w-full max-w-md items-center gap-2">
              <label className="sr-only">Email address</label>
              <div className="relative w-full">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@university.edu"
                  className="w-full border border-white/15 bg-white/5 py-3 pl-9 pr-3 text-sm text-white placeholder:text-white/40 focus:outline-none "
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 border border-white/15 bg-white px-4 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 cursor-pointer hover:bg-[#0EB8FF] hover:text-white"
              >
                Subscribe
              </button>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <a
                aria-label="LinkedIn"
                href="#"
                className="border border-white/15 p-2 text-white/80 transition hover:text-white hover:bg-white/10"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>
              <a
                aria-label="Twitter"
                href="#"
                className="border border-white/15 p-2 text-white/80 transition hover:text-white hover:bg-white/10"
              >
                <FaXTwitter className="h-5 w-5" />
              </a>
              <a
                aria-label="YouTube"
                href="#"
                className="border border-white/15 p-2 text-white/80 transition hover:text-white hover:bg-white/10"
              >
                <FaYoutube className="h-5 w-5" />
              </a>
              <a
                aria-label="GitHub"
                href="#"
                className="border border-white/15 p-2 text-white/80 transition hover:text-white hover:bg-white/10"
              >
                <FaGithub className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0EB8FF]">
                Quick Links
              </h3>
              <ul className="mt-3 space-y-2">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <FooterLink href={l.href}>{l.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0EB8FF]">
                Resources
              </h3>
              <ul className="mt-3 space-y-2">
                {resources.map((l) => (
                  <li key={l.label}>
                    <FooterLink href={l.href}>{l.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0EB8FF]">
              Contact
            </h3>
            <div className="mt-3 space-y-3 text-sm text-white/80">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-white/50" />
                <span>
                  Masdar City - SE45 05 - Abu Dhabi, United Arab Emirates
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-white/50" /> +971 050232482
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-white/50" /> cs@mbzuai.ac.ae
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white/90 transition hover:bg-white/10"
              >
                Get Directions <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row">
          <p>
            © {new Date().getFullYear()} MBZUAI - Department of Computer Science
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <span className="opacity-30">•</span>
            <a href="#" className="hover:text-white">
              Accessibility
            </a>
            <span className="opacity-30">•</span>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
