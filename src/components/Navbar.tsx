"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

// export function NavbarDemo() {
//   return (
//     <div className="relative w-full flex items-center justify-center">
//       <Navbar className="top-2" />
//       <p className="text-black dark:text-white">
//         The Navbar will show on top of the page
//       </p>
//     </div>
//   );
// }

{/* <div className="flex flex-col items-center justify-center border border-amber-400">
            <p className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 border-2-blue" > Master the <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.9)]">art</span> of music</p>
            
            <p
            className="mt-4 font-normal text-base md:text-lg text-neutral-500 max-w-lg mx-auto text-center "
            >Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.
            </p>
          </div> */}

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Service">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#">Live Demo</HoveredLink>
            <HoveredLink href="#">Home tutoring</HoveredLink>
            <HoveredLink href="#">classical Music</HoveredLink>
            
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Contact"
        ></MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
