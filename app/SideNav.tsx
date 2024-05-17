"use client";

import {
  Home,
  Info,
  Languages,
  LibraryBig,
  MessageCircleQuestion,
  NotebookPen,
} from "lucide-react";
import { usePathname } from "next/navigation";

export default function SideNav({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="w-full flex bg-slate-50">
      <nav className="w-64 border-r-2 border-sky-200 flex flex-col items-center py-16 gap-16 sticky top-0  h-screen">
        <Languages className="size-16 p-4 bg-sky-200 rounded-2xl" />
        <ul className="w-5/6 space-y-3.5">
          <li className="relative px-4 py-3 rounded-2xl inline-flex w-full cursor-pointer hover:scale-105 duration-150 bg-sky-200">
            <Home className="mr-5 size-6" />
            Home
            {pathname === "/" && (
              <span className="absolute top-0 right-0">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
              </span>
            )}
          </li>
          <li className="relative px-4 py-3 rounded-2xl inline-flex w-full cursor-pointer hover:scale-105 duration-150 bg-sky-200">
            <LibraryBig className="mr-5 size-6" />
            Cards
            {pathname.includes("card") && (
              <span className="absolute top-0 right-0">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
              </span>
            )}
          </li>
          <li className="relative px-4 py-3 rounded-2xl inline-flex w-full cursor-pointer hover:scale-105 duration-150 bg-sky-200">
            <NotebookPen className="mr-5 size-6" />
            Notebooks
            {pathname.includes("notebook") && (
              <span className="absolute top-0 right-0">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
              </span>
            )}
          </li>
          <li className="relative px-4 py-3 rounded-2xl inline-flex w-full cursor-pointer hover:scale-105 duration-150 bg-sky-200">
            <MessageCircleQuestion className="mr-5 size-6" />
            Assignments
            {pathname.includes("assignment") && (
              <span className="absolute top-0 right-0">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
              </span>
            )}
          </li>
        </ul>
        <div className="grow flex flex-col justify-end w-5/6">
          <p className="relative px-4 py-3 rounded-2xl inline-flex w-full cursor-pointer hover:scale-105 duration-150 bg-sky-200">
            <Info className="mr-5 size-6" />
            About
          </p>
        </div>
      </nav>
      <main className="grow p-16">{children}</main>
    </div>
  );
}
