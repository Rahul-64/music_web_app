import { FeaturedCourses } from "@/components/FeaturedCourses";
import Hero from "@/components/Hero";
import TestimonialCard from "@/components/TestimonialCard";
import Whychooseme from "@/components/Whychooseme";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/15 bg-grid-white/10">
        <Hero />
        <FeaturedCourses/>
        <Whychooseme/>
        <TestimonialCard/>
      </main>
    </>
  );
}
