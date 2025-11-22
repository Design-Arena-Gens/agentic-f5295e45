"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const navigation = [
  { name: "الرئيسية", href: "#hero" },
  { name: "الدروس", href: "#curriculum" },
  { name: "الألعاب", href: "#games" },
  { name: "الذكاء الاصطناعي", href: "#ai" },
  { name: "الأسعار", href: "#pricing" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/60 bg-white/80 backdrop-blur-lg transition dark:border-slate-800/70 dark:bg-slate-950/80">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#hero" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 text-lg font-semibold text-white shadow-lg">
            LM
          </span>
          <span className="flex flex-col">
            <span className="text-lg font-bold leading-tight text-slate-900 dark:text-white">
              Lingo Master
            </span>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              تعلم لغات العالم بمتعة
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-full px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800/70 dark:hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#pricing"
            className="hidden rounded-full bg-gradient-to-l from-sky-500 via-cyan-500 to-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl lg:inline-flex"
          >
            جرّب الخطة الذكية
          </Link>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-700 shadow-sm transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-slate-200 bg-white px-4 py-4 text-sm font-medium shadow-lg dark:border-slate-800 dark:bg-slate-900 lg:hidden"
        >
          <div className="flex flex-col gap-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-full px-4 py-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#pricing"
              onClick={() => setOpen(false)}
              className="rounded-full bg-gradient-to-l from-sky-500 via-cyan-500 to-emerald-500 px-4 py-2 text-center font-semibold text-white shadow-lg"
            >
              جرّب الخطة الذكية
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

