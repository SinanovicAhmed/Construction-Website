import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative scroll-mt-24 w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px] bg-hero_image bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-black/90 to-transparent"></div>
      <div className="mx-auto max-w-[1280px] h-full flex items-center px-6 md:px-10">
        <div className="relative z-10 w-full sm:w-[50%] flex flex-col gap-8">
          <h2 className="text-white text-3xl lg:text-5xl font-bold">
            We Prepare For The <span className="text-primary_orange">Future</span>
          </h2>
          <p className="text-white text-sm lg:text-base">
            We provide the best architectural design, contruction, and building maintance services
            for you.
          </p>
          <div className="flex gap-4">
            <button className="px-4 py-2 text-sm lg:text-base bg-primary_orange hover:bg-orange-600 text-white transition-color rounded-md">
              Our Services
            </button>
            <button className="px-4 py-2 text-sm lg:text-base bg-primary_gray hover:bg-gray-800 text-white transition-color rounded-md">
              View Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
