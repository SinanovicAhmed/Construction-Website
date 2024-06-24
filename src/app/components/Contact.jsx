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
          Vodilni v gradbeništvu in civilnem inženirstvu
        </h2>
        <div className="hidden md:flex gap-4 justify-center py-4">
          <span className="flex gap-2 items-center">
            <CheckmarkSVG />
            <p className="text-white text-sm lg:text-base font-light">Strokovno osebje</p>
          </span>
          <span className="flex gap-2 items-center">
            <CheckmarkSVG />
            <p className="text-white text-sm lg:text-base font-light">100% zadovoljstvo</p>
          </span>
          <span className="flex gap-2 items-center">
            <CheckmarkSVG />
            <p className="text-white text-sm lg:text-base font-light">Natančno testiranje</p>
          </span>
          <span className="flex gap-2 items-center">
            <CheckmarkSVG />
            <p className="text-white text-sm lg:text-base font-light">Transparentna cenitev</p>
          </span>
        </div>

        <div className="mx-auto space-y-8 inline-block bg-primary_orange text-white p-4 md:p-10 my-4 rounded-lg">
          <h2 className="text-2xl font-bold text-center text-primary_gray">Kontaktni podatki</h2>
          <div>
            <h3 className="font-semibold text-primary_gray">Naša lokacija</h3>
            <p className="font-thin text-sm">Slovenija, Obalno-kraška regija</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary_gray">Hitri kontakt</h3>
            <p className="font-thin text-sm">Email: integraem6@gmail.com</p>
            <p className="font-thin text-sm">Pokličite nas: +386 41 726 851</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary_gray">Delovni čas</h3>
            <p className="font-thin text-sm">Ponedeljek - petek</p>
            <p className="font-thin text-sm">08:00 - 16:00</p>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <h2 className="font-bold text-center">
              Imate vprašanje? Stopite v stik z nami za pomoč!
            </h2>
            <a
              href="tel:+386 41 726 851"
              className="px-4 py-2 text-sm lg:text-base bg-primary_gray hover:bg-gray-800 text-white transition-color rounded-md"
            >
              Pokličite nas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
