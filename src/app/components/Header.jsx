import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="w-full h-24 bg-primary_gray">
      <div className="mx-auto w-full h-full flex justify-between items-center max-w-[1400px] px-4 md:px-10">
        <h2 className="font-unlock text-primary_orange text-3xl">IntegraEM</h2>
        <div className="flex gap-4 text-white">
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
        <div className="flex gap-2">
          <select name="language" id="language" className="bg-transparent text-white">
            <option value="en" className="text-black">
              English
            </option>
            <option value="sl" className="text-black">
              Slovenian
            </option>
          </select>
          <button className="px-4 py-2 bg-primary_orange hover:bg-orange-600 text-white transition-color rounded-md">
            Contact us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
