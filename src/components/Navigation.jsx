'use client';
import React, { useState } from "react";
import { GitLogo, SearchLogo, Tailwind, TailwindLogo } from "@/svg";

const Navigation = () => {

  return (
    <div className="w-[100%] h-auto items-center flex justify-center bg-white p-0.5" id="nav">
      <div className="h-20 w-[100%] max-w-[1300px] flex items-center">
        <TailwindLogo />
        <Tailwind />
        <div className="h-[100%] flex items-center w-[100%] justify-between border-b-[1px] border-gray-200 mx-10">
          <div className="flex gap-5 items-center">
            <SearchLogo />
            <span className="text-gray-500">Quick search for anything</span>
            <div className="border-[1px] border-gray-200 rounded p-1 pr-2 pl-2 text-sm text-gray-500 hidden md:block">
              Ctrl K
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <select className="w-28 h-7 text-sm text-gray-500 hidden sm:block">
              <option>v2.2.16</option>
              <option>v2.2.18</option>
              <option>v3.0.1</option>
            </select>
            <GitLogo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
