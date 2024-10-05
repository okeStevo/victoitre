"use client";
import { useState, useEffect } from "react";
import { BackgroundLines } from "./ui/background-lines";
import Image from "next/image";
import { bg } from "../app/public";
export default function BackgroundLinesDemo() {
  const [color, setColor] = useState("FFFFFF");

  const getRandomBrightColor = () => {
    const letters = "BCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(getRandomBrightColor());
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 ">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Welcome to Victoria French Classes
      </h2>
      <p className="max-w-[50rem] mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Hello and welcome! I’m{" "}
        <span style={{ color: color }} className="font-bold">
          {" "}
          Victoire
        </span>
        , a dedicated French teacher here to help you learn and improve your
        French skills. Whether you're just starting or looking to advance, I
        offer personalized lessons to suit your needs. Let’s begin your journey
        in mastering French together!
      </p>
      <button className="border text-sm font-medium relative border-neutral-200 w-[15%] dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full mt-8">
        <span>Login</span>
        <span className="absolute inset-x-0 w-[100%] mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
      </button>
    </BackgroundLines>
  );
}
