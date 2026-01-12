"use client";
import React from "react";
import Link from "next/link";
import { MaskContainer } from "./ui/svg-mask-effect";
import { Button } from "./ui/moving-border";
import { Spotlight } from "./ui/Spotlight"

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <MaskContainer
        revealText={
          <div className="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-800 dark:text-white">
            
            <p className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Master the <span className="text-orange-500/35 ">art</span> of music
            </p>

            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
              Dive into our comprehensive music courses and transform your
              musical journey today. Whether you're a beginner or looking to
              refine your skills, join us to unlock your true potential.
            </p>
          </div>
        }
        className="absolute inset-0 w-full h-full"
      >
        <div className="flex flex-col gap-16">
          <div className="mx-auto max-w-4xl text-center text-2xl font-bold text-orange-500">
            <p className="mt-20 md:mt-0 text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-orange-400 to-orange-700">
              Would you like to try a different style, such as more classical pop or Jazz?
            </p>
          </div>
          <div>
            <Link href="#">
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Explore courses
              </Button>
            </Link>
          </div>
        </div>
      </MaskContainer>
    </div>
  );
};

export default Hero;
