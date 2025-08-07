"use client";

import Link from "next/link";
import React, { useState } from "react";
import { RiGithubFill } from "react-icons/ri";
import { ModeToggle } from "./ModeToggle";
import { Menu, X } from "lucide-react";

export default function Appbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full lg:w-[99.3vw] mx-auto baseBorder border-b text-sm fixed shadow-xl z-50 bg-white dark:bg-black">
      <div className="mt-2 border-t baseBorder" />
      <div className="max-w-3xl mx-auto baseBorder border-x flex items-center justify-between py-1 px-3 text-gray-700 dark:text-gray-200">
        <Link href={"/"} className="font-bold font-[cursive] tracking-widest">
          Supxdevs
        </Link>
        <div className="flex items-center gap-5">
          <div className="hidden sm:flex gap-4">
            <Link href={"/#projects"}>Projects</Link>
            <Link href={"/reviews"}>Reviews</Link>
          </div>

          <div className="flex gap-2 items-center">
            {/* <Searchbox /> */}
            <Link
              href={"https://github.com/GauravSinghdev"}
              target="_blank"
              className="border baseBorder hover:bg-accent rounded-[50%] text-center"
            >
              <RiGithubFill className="size-8 p-2" />
            </Link>
            <ModeToggle />
            <div className="sm:hidden">
              <button
                onClick={toggleMenu}
                className="p-1 text-gray-700 dark:text-gray-200 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="size-6" />
                ) : (
                  <Menu className="size-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden bg-white dark:bg-gray-800 border-t border-gray-200">
          <div className="flex flex-col items-start gap-4 p-4 text-gray-700 dark:text-gray-200 bg-transparent">
            <Link
              className=" w-full p-1"
              href={"/#projects"}
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              className=" w-full p-1"
              href={"/reviews"}
              onClick={toggleMenu}
            >
              Reviews
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
