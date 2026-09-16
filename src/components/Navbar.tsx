 ```tsx
"use client";

import Link from "next/link";
import {
  ChevronDown,
  Cpu,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Solutions", href: "#solutions" },
    { name: "Training", href: "#training" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* ================= BRAND ================= */}
        <Link
          href="#home"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3"
        >
          {/* Temporary logo mark */}
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white">
  <img
    src="/images/hero/wazatechfix-hero.jpg"
    alt="WazaTechFix Hub"
    className="h-full w-full object-contain p-1"
  />
</div>	

          <div className="leading-none">
            <div className="text-lg font-black tracking-tight text-white sm:text-xl">
              Waza<span className="text-blue-500">TechFix</span>
            </div>

            <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.22em] text-slate-500">
              Technology Hub
            </div>
          </div>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-white/5 hover:text-blue-400"
            >
              {link.name}
            </Link>
          ))}

          {/* More dropdown visual */}
          <button
            type="button"
            className="flex items-center gap-1 rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-white/5 hover:text-blue-400"
          >
            More
            <ChevronDown size={15} />
          </button>

          <Link
            href="#contact"
            className="ml-3 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
          >
            Contact Us
          </Link>
        </nav>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 text-slate-200 transition hover:border-blue-500 hover:text-blue-400 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ================= MOBILE NAV ================= */}
      {open && (
        <div className="border-t border-white/10 bg-slate-950 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-4 text-sm font-semibold text-slate-300 transition hover:text-blue-400"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-5 rounded-xl bg-blue-600 px-5 py-3.5 text-center text-sm font-bold text-white transition hover:bg-blue-500"
            >
              Contact WazaTechFix
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
```
