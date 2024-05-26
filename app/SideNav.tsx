"use client";

import {
  Home,
  Languages,
  LibraryBig,
  MessageCircleQuestion,
  NotebookPen,
} from "lucide-react";
import { usePathname } from "next/navigation";

export default function SideNav({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="w-full flex flex-col-reverse sm:flex-row bg-slate-50 min-h-screen">
      <nav className="w-[95vw] h-16 sm:w-64 flex sm:flex-col items-center justify-around sm:justify-start bottom-0 sm:top-0 py-10 sm:gap-16 sticky sm:h-[95vh] m-2 sm:m-5 bg-primary-100 rounded-xl shadow-lg text-primary-950 z-50">
        <Languages className="size-16 p-4 bg-primary-400 rounded-2xl hidden sm:block" />
        <ul className="sm:w-5/6 w-[95%] flex flex-row sm:flex-col gap-4">
          <li
            className={`relative px-4 py-3 rounded-2xl inline-flex flex-col text-xs sm:text-base sm:flex-row items-center w-full cursor-pointer hover:scale-105 duration-150 ${
              pathname === "/" ? "bg-primary-400" : "bg-primary-300"
            }`}
          >
            <Home className="sm:mr-5 size-4 sm:size-6" />
            Home
            {pathname === "/" && (
              <span className="absolute top-0 right-0">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary-500"></span>
                </span>
              </span>
            )}
          </li>
          <li
            className={`relative px-4 py-3 rounded-2xl inline-flex flex-col text-xs sm:text-base sm:flex-row items-center w-full cursor-pointer hover:scale-105 duration-150 ${
              pathname.includes("card") ? "bg-primary-400" : "bg-primary-300"
            }`}
          >
            <LibraryBig className="sm:mr-5 size-4 sm:size-6" />
            Cards
            {pathname.includes("card") && (
              <span className="absolute top-0 right-0">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary-500"></span>
                </span>
              </span>
            )}
          </li>
          <li
            className={`relative px-4 py-3 rounded-2xl inline-flex flex-col text-xs sm:text-base sm:flex-row items-center w-full cursor-pointer hover:scale-105 duration-150 ${
              pathname.includes("notebook")
                ? "bg-primary-400"
                : "bg-primary-300"
            }`}
          >
            <NotebookPen className="sm:mr-5 size-4 sm:size-6" />
            Notes
            {pathname.includes("notebook") && (
              <span className="absolute top-0 right-0">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary-500"></span>
                </span>
              </span>
            )}
          </li>
          <li
            className={`relative px-4 py-3 rounded-2xl inline-flex flex-col text-xs sm:text-base sm:flex-row items-center w-full cursor-pointer hover:scale-105 duration-150 ${
              pathname.includes("about") ? "bg-primary-400" : "bg-primary-300"
            }`}
          >
            <MessageCircleQuestion className="sm:mr-5 size-4 sm:size-6" />
            About
            {pathname.includes("about") && (
              <span className="absolute top-0 right-0">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary-500"></span>
                </span>
              </span>
            )}
          </li>
        </ul>
      </nav>
      <main className="grow py-5 h-fit">{children}</main>
    </div>
  );
}
