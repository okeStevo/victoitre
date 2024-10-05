import React from "react";
import BackgroundLinesDemo from "@/components/BackgroundLines";
import { BentoGridDemo } from "@/components/BentoGrid";
import Card from "@/components/Card";
import { AppleCardsCarouselDemo } from "@/components/AceCard";
import Contact from "@/components/Login";

export default function Page() {
  return (
    <>
      <BackgroundLinesDemo />
      <BentoGridDemo />
      <AppleCardsCarouselDemo />
      <Contact />
    </>
  );
}
