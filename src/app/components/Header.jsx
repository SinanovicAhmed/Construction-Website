import Link from "next/link";
import React from "react";
import LanguageSelection from "./LanguageSelection";
import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <nav className="w-full h-24 bg-primary_gray">
      <div className="mx-auto w-full h-full flex justify-between items-center max-w-[1400px] px-6 md:px-10">
        <h2 className="font-unlock text-primary_orange text-3xl">IntegraEM</h2>
        <div className="hidden md:flex gap-4 text-white">
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
        </div>
        <div className="hidden md:flex gap-2">
          <LanguageSelection />
          <button className="px-4 py-2 bg-primary_orange hover:bg-orange-600 text-white transition-color rounded-md">
            Contact us
          </button>
        </div>
        <Hamburger />
      </div>
    </nav>
  );
};

export default Header;
