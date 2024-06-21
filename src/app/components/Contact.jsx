import React from "react";
import CheckmarkSVG from "../../../public/svg/CheckmarkSVG";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 w-full bg-contact_image bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 backdrop-blur-md bg-gradient-to-b from-primary_gray from-10% to-transparent"></div>
      <div className="relative flex flex-col justify-center z-10 mx-auto w-full max-w-[1280px] h-full py-5 md:py-10 px-6 md:px-10">
        <h2 className="text-white text-center font-bold text-3xl lg:text-5xl">
          Leading Way In Building & Civil Construction
        </h2>
        <div className="hidden md:flex gap-4 justify-center py-4">
          <span className="flex gap-2 items-center">
            <CheckmarkSVG />
            <p className="text-white text-sm lg:text-base font-light">Professional Staff</p>
          </span>
          <span className="flex gap-2 items-center">
            <CheckmarkSVG />
            <p className="text-white text-sm lg:text-base font-light">100% Satisfaction</p>
          </span>
          <span className="flex gap-2 items-center">
            <CheckmarkSVG />
            <p className="text-white text-sm lg:text-base font-light">Accurate Testing</p>
          </span>
          <span className="flex gap-2 items-center">
            <CheckmarkSVG />
            <p className="text-white text-sm lg:text-base font-light">Transparent Pricing</p>
          </span>
        </div>

        <div className="mx-auto space-y-8 inline-block bg-primary_orange text-white p-4 md:p-10 my-4 rounded-lg">
          <h2 className="text-2xl font-bold text-center text-primary_gray">Contact info</h2>
          <div>
            <h3 className="font-semibold text-primary_gray">Our Location</h3>
            <p className="font-thin text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary_gray">Quick Contact</h3>
            <p className="font-thin text-sm">Email : Lorem ipsum dolor sit amet</p>
            <p className="font-thin text-sm">Call Us : Lorem ipsum dolor sit amet</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary_gray">Opening Hours</h3>
            <p className="font-thin text-sm">Monday - Friday</p>
            <p className="font-thin text-sm">09:00 AM - 06:00 PM</p>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <h2 className="font-bold text-center">
              Do You Have Any Question, Just Contact Us To Get Help!
            </h2>

            <button className="w-40 px-4 py-2 text-sm lg:text-base bg-primary_gray hover:bg-gray-800 text-white transition-color rounded-md">
              Call us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
