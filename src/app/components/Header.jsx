import Link from "next/link";
import React from "react";
import LanguageSelection from "./LanguageSelection";
import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <nav className="sticky top-0 z-20 w-full h-24 bg-primary_gray">
      <div className="mx-auto w-full h-full flex justify-between items-center max-w-[1280px] px-6 md:px-10">
        <Link href="#hero" className="font-unlock text-primary_orange text-2xl md:text-4xl">
          IntegraEM
        </Link>
        <div className="hidden md:flex gap-4 text-white">
          <Link href="#hero" className="hover:text-primary_orange">
            Home
          </Link>
          <Link href="#about" className="hover:text-primary_orange">
            About us
          </Link>
          <Link href="#projects" className="hover:text-primary_orange">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-primary_orange">
            Contact
          </Link>
        </div>
        <div className="hidden md:flex gap-4">
          <LanguageSelection />
          <a
            href="tel:+1234567890"
            className="inline-block px-4 py-2 bg-primary_orange hover:bg-orange-600 text-white transition-color rounded-md"
          >
            Call us
          </a>
        </div>
        <Hamburger />
      </div>
    </nav>
  );
};

export default Header;
