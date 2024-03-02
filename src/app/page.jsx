"use client";
import Navbar from "@/components/Navbar";
import Navigation from "@/components/Navigation";
import { createProducts, handleResponse } from "@/redux/apiCalls";
import { userRequest } from "@/requestMethod";
import { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  const [products, setProducts] = useState([]);

  const prd = {
    title: "VCT-2031",
    desc: "The Best of The Best",
    img: "myimage",
    categories: ["FPS", "SHOOTER"],
    size: ["S", "M", "L"],
    color: ["Black", "White"],
    price: 30000,
    inStock: true
  }

  const dispatch = useDispatch();

  const createPrd = (e) => {
    e.preventDefault();
    createProducts(dispatch, prd).then((data) => {
      handleResponse(data, "Products created!", "Product cannot have same title")
    }).catch("Something went wrong...")
  }

  useEffect(() => {
    const getPrd = async (req, res) => {
      try {
        const products = await userRequest.get("products");
        setProducts(products.data);
      } catch (err) {
        res.status(500).json("Products not found!");
      }
    };
    getPrd();
  }, []);

  //Access window object in ssr
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", (e) => {
      const item = document.querySelectorAll(".add");
      if (window.scrollY > 48) {
        document.getElementById("box").style.display = "block";
        document.getElementById("nav").style.position = "fixed";
        document.getElementById("navbar").style.display = "none";
        item.forEach((i) => {
          i.classList.add("item");
          console.log(i.classList);
        });
      } else {
        document.getElementById("box").style.display = "none";
        document.getElementById("nav").style.position = "static";
        document.getElementById("navbar").style.display = "block";
        item.forEach((i) => {
          i.classList.remove("item");
        });
      }
      // console.log(window.scrollY)
    });
  }

  // console.log(products);

  return (
    <>
      <Navbar />
      <Navigation />
      <div className="h-[130px] w-[100%] hidden" id="box"></div>
      <div className="h-[auto] h-auto w-[100%] flex justify-center">
        <div className="flex w-screen max-w-[1300px]">
          <div className="h-auto flex mt-2">
            <div className="h-auto w-[20%]">
              <div className="gap-10 h-[760px] w-auto text-sm w-auto add overflow-scroll overflow-x-hidden">
                <button onClick={createPrd}>Create products</button>
                <h5 class="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">
                  Getting started
                </h5>
                <ul>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/installation"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Installation</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="https://github.com/tailwindlabs/tailwindcss/releases"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Release Notes</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/upgrading-to-v2"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Upgrade Guide</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/editor-support"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Editor Support</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/using-with-preprocessors"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Using with Preprocessors</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/optimizing-for-production"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Optimizing for Production</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/browser-support"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Browser Support</span>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/installation"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Installation</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="https://github.com/tailwindlabs/tailwindcss/releases"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Release Notes</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/upgrading-to-v2"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Upgrade Guide</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/editor-support"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Editor Support</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/using-with-preprocessors"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Using with Preprocessors</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/optimizing-for-production"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Optimizing for Production</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/browser-support"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Browser Support</span>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/installation"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Installation</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="https://github.com/tailwindlabs/tailwindcss/releases"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Release Notes</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/upgrading-to-v2"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Upgrade Guide</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/editor-support"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Editor Support</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/using-with-preprocessors"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Using with Preprocessors</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/optimizing-for-production"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Optimizing for Production</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/browser-support"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Browser Support</span>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/installation"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Installation</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="https://github.com/tailwindlabs/tailwindcss/releases"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Release Notes</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/upgrading-to-v2"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Upgrade Guide</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/editor-support"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Editor Support</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/using-with-preprocessors"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Using with Preprocessors</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/optimizing-for-production"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Optimizing for Production</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/browser-support"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Browser Support</span>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/installation"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Installation</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="https://github.com/tailwindlabs/tailwindcss/releases"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Release Notes</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/upgrading-to-v2"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Upgrade Guide</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/editor-support"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Editor Support</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/using-with-preprocessors"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Using with Preprocessors</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/optimizing-for-production"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Optimizing for Production</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/browser-support"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Browser Support</span>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/installation"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Installation</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="https://github.com/tailwindlabs/tailwindcss/releases"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Release Notes</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/upgrading-to-v2"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Upgrade Guide</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/editor-support"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Editor Support</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/using-with-preprocessors"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Using with Preprocessors</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/optimizing-for-production"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Optimizing for Production</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/browser-support"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Browser Support</span>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/installation"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Installation</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="https://github.com/tailwindlabs/tailwindcss/releases"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Release Notes</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/upgrading-to-v2"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Upgrade Guide</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/editor-support"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Editor Support</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/using-with-preprocessors"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Using with Preprocessors</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/optimizing-for-production"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Optimizing for Production</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/browser-support"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Browser Support</span>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/installation"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Installation</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="https://github.com/tailwindlabs/tailwindcss/releases"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Release Notes</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/upgrading-to-v2"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Upgrade Guide</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/editor-support"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Editor Support</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/using-with-preprocessors"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Using with Preprocessors</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/optimizing-for-production"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Optimizing for Production</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/browser-support"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Browser Support</span>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/installation"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Installation</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="https://github.com/tailwindlabs/tailwindcss/releases"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Release Notes</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/upgrading-to-v2"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Upgrade Guide</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/editor-support"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Editor Support</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/using-with-preprocessors"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Using with Preprocessors</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/optimizing-for-production"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Optimizing for Production</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/browser-support"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Browser Support</span>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/installation"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Installation</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="https://github.com/tailwindlabs/tailwindcss/releases"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Release Notes</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/upgrading-to-v2"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Upgrade Guide</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/editor-support"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Editor Support</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/using-with-preprocessors"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Using with Preprocessors</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/optimizing-for-production"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Optimizing for Production</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/browser-support"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Browser Support</span>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/installation"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Installation</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="https://github.com/tailwindlabs/tailwindcss/releases"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Release Notes</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/upgrading-to-v2"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Upgrade Guide</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/editor-support"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Editor Support</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/using-with-preprocessors"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Using with Preprocessors</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/optimizing-for-production"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Optimizing for Production</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/browser-support"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Browser Support</span>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/installation"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Installation</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="https://github.com/tailwindlabs/tailwindcss/releases"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Release Notes</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/upgrading-to-v2"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Upgrade Guide</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/editor-support"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Editor Support</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/using-with-preprocessors"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Using with Preprocessors</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/optimizing-for-production"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Optimizing for Production</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                      href="/docs/browser-support"
                    >
                      <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                      <span class="relative">Browser Support</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col px-5 text-justify h-auto w-[70%] overflow-hidden sm:hidden">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              suscipit iste non, illum error veniam quisquam voluptatem fuga
              rerum soluta a quidem earum mollitia. Dolores fugiat dicta sit
              tenetur ducimus. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ea suscipit iste non, illum error veniam
              quisquam voluptatem fuga rerum soluta a quidem earum mollitia.
              Dolores fugiat dicta sit tenetur ducimus. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ea suscipit iste non, illum
              error veniam quisquam voluptatem fuga rerum soluta a quidem earum
              mollitia. Dolores fugiat dicta sit tenetur ducimus. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Ea suscipit iste
              non, illum error veniam quisquam voluptatem fuga rerum soluta a
              quidem earum mollitia. Dolores fugiat dicta sit tenetur ducimus.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              suscipit iste non, illum error veniam quisquam voluptatem fuga
              rerum soluta a quidem earum mollitia. Dolores fugiat dicta sit
              tenetur ducimus. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ea suscipit iste non, illum error veniam
              quisquam voluptatem fuga rerum soluta a quidem earum mollitia.
              Dolores fugiat dicta sit tenetur ducimus. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ea suscipit iste non, illum
              error veniam quisquam voluptatem fuga rerum soluta a quidem earum
              mollitia. Dolores fugiat dicta sit tenetur ducimus. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Ea suscipit iste
              non, illum error veniam quisquam voluptatem fuga rerum soluta a
              quidem earum mollitia. Dolores fugiat dicta sit tenetur ducimus.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              suscipit iste non, illum error veniam quisquam voluptatem fuga
              rerum soluta a quidem earum mollitia. Dolores fugiat dicta sit
              tenetur ducimus. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ea suscipit iste non, illum error veniam
              quisquam voluptatem fuga rerum soluta a quidem earum mollitia.
              Dolores fugiat dicta sit tenetur ducimus. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ea suscipit iste non, illum
              error veniam quisquam voluptatem fuga rerum soluta a quidem earum
              mollitia. Dolores fugiat dicta sit tenetur ducimus. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Ea suscipit iste
              non, illum error veniam quisquam voluptatem fuga rerum soluta a
              quidem earum mollitia. Dolores fugiat dicta sit tenetur ducimus.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              suscipit iste non, illum error veniam quisquam voluptatem fuga
              rerum soluta a quidem earum mollitia. Dolores fugiat dicta sit
              tenetur ducimus. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ea suscipit iste non, illum error veniam
              quisquam voluptatem fuga rerum soluta a quidem earum mollitia.
              Dolores fugiat dicta sit tenetur ducimus. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ea suscipit iste non, illum
              error veniam quisquam voluptatem fuga rerum soluta a quidem earum
              mollitia. Dolores fugiat dicta sit tenetur ducimus. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Ea suscipit iste
              non, illum error veniam quisquam voluptatem fuga rerum soluta a
              quidem earum mollitia. Dolores fugiat dicta sit tenetur ducimus.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              suscipit iste non, illum error veniam quisquam voluptatem fuga
              rerum soluta a quidem earum mollitia. Dolores fugiat dicta sit
              tenetur ducimus. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ea suscipit iste non, illum error veniam
              quisquam voluptatem fuga rerum soluta a quidem earum mollitia.
              Dolores fugiat dicta sit tenetur ducimus. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ea suscipit iste non, illum
              error veniam quisquam voluptatem fuga rerum soluta a quidem earum
              mollitia. Dolores fugiat dicta sit tenetur ducimus. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Ea suscipit iste
              non, illum error veniam quisquam voluptatem fuga rerum soluta a
              quidem earum mollitia. Dolores fugiat dicta sit tenetur ducimus.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              suscipit iste non, illum error veniam quisquam voluptatem fuga
              rerum soluta a quidem earum mollitia. Dolores fugiat dicta sit
              tenetur ducimus. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ea suscipit iste non, illum error veniam
              quisquam voluptatem fuga rerum soluta a quidem earum mollitia.
              Dolores fugiat dicta sit tenetur ducimus. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ea suscipit iste non, illum
              error veniam quisquam voluptatem fuga rerum soluta a quidem earum
              mollitia. Dolores fugiat dicta sit tenetur ducimus. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Ea suscipit iste
              non, illum error veniam quisquam voluptatem fuga rerum soluta a
              quidem earum mollitia. Dolores fugiat dicta sit tenetur ducimus.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              suscipit iste non, illum error veniam quisquam voluptatem fuga
              rerum soluta a quidem earum mollitia. Dolores fugiat dicta sit
              tenetur ducimus. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ea suscipit iste non, illum error veniam
              quisquam voluptatem fuga rerum soluta a quidem earum mollitia.
              Dolores fugiat dicta sit tenetur ducimus. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ea suscipit iste non, illum
              error veniam quisquam voluptatem fuga rerum soluta a quidem earum
              mollitia. Dolores fugiat dicta sit tenetur ducimus. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Ea suscipit iste
              non, illum error veniam quisquam voluptatem fuga rerum soluta a
              quidem earum mollitia. Dolores fugiat dicta sit tenetur ducimus.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              suscipit iste non, illum error veniam quisquam voluptatem fuga
              rerum soluta a quidem earum mollitia. Dolores fugiat dicta sit
              tenetur ducimus. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ea suscipit iste non, illum error veniam
              quisquam voluptatem fuga rerum soluta a quidem earum mollitia.
              Dolores fugiat dicta sit tenetur ducimus. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ea suscipit iste non, illum
              error veniam quisquam voluptatem fuga rerum soluta a quidem earum
              mollitia. Dolores fugiat dicta sit tenetur ducimus.
            </div>
            <div className="flex flex-col px-5 text-justify h-auto w-[60%] overflow-hidden hidden sm:block">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              suscipit iste non, illum error veniam quisquam voluptatem fuga
              rerum soluta a quidem earum mollitia. Dolores fugiat dicta sit
              tenetur ducimus. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ea suscipit iste non, illum error veniam
              quisquam voluptatem fuga rerum soluta a quidem earum mollitia.
              Dolores fugiat dicta sit tenetur ducimus. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ea suscipit iste non, illum
              error veniam quisquam voluptatem fuga rerum soluta a quidem earum
              mollitia. Dolores fugiat dicta sit tenetur ducimus. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Ea suscipit iste
              non, illum error veniam quisquam voluptatem fuga rerum soluta a
              quidem earum mollitia. Dolores fugiat dicta sit tenetur ducimus.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              suscipit iste non, illum error veniam quisquam voluptatem fuga
              rerum soluta a quidem earum mollitia. Dolores fugiat dicta sit
              tenetur ducimus. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ea suscipit iste non, illum error veniam
              quisquam voluptatem fuga rerum soluta a quidem earum mollitia.
              Dolores fugiat dicta sit tenetur ducimus. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ea suscipit iste non, illum
              error veniam quisquam voluptatem fuga rerum soluta a quidem earum
              mollitia. Dolores fugiat dicta sit tenetur ducimus. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Ea suscipit iste
              non, illum error veniam quisquam voluptatem fuga rerum soluta a
              quidem earum mollitia. Dolores fugiat dicta sit tenetur ducimus.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              suscipit iste non, illum error veniam quisquam voluptatem fuga
              rerum soluta a quidem earum mollitia. Dolores fugiat dicta sit
              tenetur ducimus. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ea suscipit iste non, illum error veniam
              quisquam voluptatem fuga rerum soluta a quidem earum mollitia.
              Dolores fugiat dicta sit tenetur ducimus. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ea suscipit iste non, illum
              error veniam quisquam voluptatem fuga rerum soluta a quidem earum
              mollitia. Dolores fugiat dicta sit tenetur ducimus. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Ea suscipit iste
              non, illum error veniam quisquam voluptatem fuga rerum soluta a
              quidem earum mollitia. Dolores fugiat dicta sit tenetur ducimus.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              suscipit iste non, illum error veniam quisquam voluptatem fuga
              rerum soluta a quidem earum mollitia. Dolores fugiat dicta sit
              tenetur ducimus. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ea suscipit iste non, illum error veniam
              quisquam voluptatem fuga rerum soluta a quidem earum mollitia.
              Dolores fugiat dicta sit tenetur ducimus. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ea suscipit iste non, illum
              error veniam quisquam voluptatem fuga rerum soluta a quidem earum
              mollitia. Dolores fugiat dicta sit tenetur ducimus. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Ea suscipit iste
              non, illum error veniam quisquam voluptatem fuga rerum soluta a
              quidem earum mollitia. Dolores fugiat dicta sit tenetur ducimus.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              suscipit iste non, illum error veniam quisquam voluptatem fuga
              rerum soluta a quidem earum mollitia. Dolores fugiat dicta sit
              tenetur ducimus. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ea suscipit iste non, illum error veniam
              quisquam voluptatem fuga rerum soluta a quidem earum mollitia.
              Dolores fugiat dicta sit tenetur ducimus. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ea suscipit iste non, illum
              error veniam quisquam voluptatem fuga rerum soluta a quidem earum
              mollitia. Dolores fugiat dicta sit tenetur ducimus. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Ea suscipit iste
              non, illum error veniam quisquam voluptatem fuga rerum soluta a
              quidem earum mollitia. Dolores fugiat dicta sit tenetur ducimus.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              suscipit iste non, illum error veniam quisquam voluptatem fuga
              rerum soluta a quidem earum mollitia. Dolores fugiat dicta sit
              tenetur ducimus. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ea suscipit iste non, illum error veniam
              quisquam voluptatem fuga rerum soluta a quidem earum mollitia.
              Dolores fugiat dicta sit tenetur ducimus. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ea suscipit iste non, illum
              error veniam quisquam voluptatem fuga rerum soluta a quidem earum
              mollitia. Dolores fugiat dicta sit tenetur ducimus. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Ea suscipit iste
              non, illum error veniam quisquam voluptatem fuga rerum soluta a
              quidem earum mollitia. Dolores fugiat dicta sit tenetur ducimus.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              suscipit iste non, illum error veniam quisquam voluptatem fuga
              rerum soluta a quidem earum mollitia. Dolores fugiat dicta sit
              tenetur ducimus. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ea suscipit iste non, illum error veniam
              quisquam voluptatem fuga rerum soluta a quidem earum mollitia.
              Dolores fugiat dicta sit tenetur ducimus. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ea suscipit iste non, illum
              error veniam quisquam voluptatem fuga rerum soluta a quidem earum
              mollitia. Dolores fugiat dicta sit tenetur ducimus. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Ea suscipit iste
              non, illum error veniam quisquam voluptatem fuga rerum soluta a
              quidem earum mollitia. Dolores fugiat dicta sit tenetur ducimus.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              suscipit iste non, illum error veniam quisquam voluptatem fuga
              rerum soluta a quidem earum mollitia. Dolores fugiat dicta sit
              tenetur ducimus. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ea suscipit iste non, illum error veniam
              quisquam voluptatem fuga rerum soluta a quidem earum mollitia.
              Dolores fugiat dicta sit tenetur ducimus. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ea suscipit iste non, illum
              error veniam quisquam voluptatem fuga rerum soluta a quidem earum
              mollitia. Dolores fugiat dicta sit tenetur ducimus.
            </div>
            <div className="h-auto w-[20%] hidden sm:block">
              <div className="text-sm h-[760px] w-[auto] add px-5">
                <div className="flex flex-col gap-10">
                  <div class="mb-8">
                    <h5 class="text-gray-900 uppercase tracking-wide font-semibold mb-3 text-sm lg:text-xs">
                      On this page
                    </h5>
                    <ul class="overflow-x-hidden text-gray-500 font-medium">
                      <li>
                        <a
                          href="#overview"
                          class="block transform transition-colors duration-200 py-2 hover:text-gray-900 text-gray-900"
                        >
                          Overview
                        </a>
                      </li>
                      <li>
                        <a
                          href="#mobile-first"
                          class="block transform transition-colors duration-200 py-2 hover:text-gray-900"
                        >
                          Mobile First
                        </a>
                      </li>
                      <li class="ml-4">
                        <a
                          href="#targeting-mobile-screens"
                          class="block py-2 transition-colors duration-200 hover:text-gray-900 font-medium"
                        >
                          Targeting mobile screens
                        </a>
                      </li>
                      <li class="ml-4">
                        <a
                          href="#targeting-a-single-breakpoint"
                          class="block py-2 transition-colors duration-200 hover:text-gray-900 font-medium"
                        >
                          Targeting a single breakpoint
                        </a>
                      </li>
                      <li>
                        <a
                          href="#customizing-breakpoints"
                          class="block transform transition-colors duration-200 py-2 hover:text-gray-900"
                        >
                          Customizing breakpoints
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
