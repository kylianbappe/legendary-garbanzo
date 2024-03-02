import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div class="py-2 bg-gradient-to-r from-indigo-600 to-light-blue-500 overflow-hidden" id="navbar">
      <div class="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative sm:flex justify-center items-center">
          <div class="text-sm font-medium text-white">
            You're looking at the documentation for
            <span class="whitespace-nowrap">Tailwind CSS v2.</span>{" "}
          </div>
          <div class="mt-1 sm:hidden">
            <a
              href="https://tailwindcss.com"
              class="text-sm text-white font-bold underline sm:hidden"
            >
              Go to Tailwind CSS v3 →
            </a>
          </div>
          <span
            aria-hidden="true"
            class="hidden sm:block mx-6 h-6 w-px bg-white bg-opacity-20"
          ></span>
          <div class="hidden sm:block">
            <div
              class="whitespace-nowrap inline-flex rounded-md bg-white py-2 px-3 text-xs font-semibold  text-blue-500 hover:bg-opacity-90"
            >
              Go to Tailwind CSS v3 →
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
