"use client";

import Link from "next/link";
import { useState } from "react";
import HamburgerSVG from "../../../public/svg/HamburgerSVG";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex md:hidden">
      <button className="w-8 h-8" onClick={() => setIsOpen((prev) => !prev)}>
        <HamburgerSVG />
      </button>
      {isOpen && (
        <div className="absolute top-24 z-20 right-0 flex flex-col items-center gap-4 w-full text-white bg-primary_gray pb-4">
          <Link href="#first-section" className="hover:text-primary_orange">
            Home
          </Link>
          <Link href="#second-section" className="hover:text-primary_orange">
            About us
          </Link>
          <Link href="#first-section" className="hover:text-primary_orange">
            Service
          </Link>
          <Link href="#second-section" className="hover:text-primary_orange">
            Project
          </Link>
          <button className="px-4 py-2 bg-primary_orange hover:bg-orange-600 text-white transition-color rounded-md">
            Contact us
          </button>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
