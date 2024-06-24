import React from "react";

const Footer = () => {
  return (
    <section className="w-full bg-primary_gray">
      <div className="mx-auto w-full max-w-[1280px] h-full py-8 px-6 md:px-10 text-white">
        <h2 className="font-unlock text-xl md:text-3xl pb-6">IntegraEM</h2>
        <div className="flex justify-between flex-col md:flex-row gap-4 md:gap-16">
          <div className="flex-grow-1 space-y-2">
            <h2>O nas</h2>
            <p className="font-thin text-xs">
              Z zaupanjem vam nudimo najboljše storitve. S pomočjo visoko kakovostnih materialov in
              strukturiranih delovnih tehnik zagotavljamo pravočasno izvedbo del.
            </p>
          </div>
          <div className="max-w-[400px] space-y-2 flex-shrink-0">
            <h2>Kontakt</h2>
            <p className="font-thin text-xs">Email: integraem6@gmail.com</p>
            <p className="font-thin text-xs">Telefon: +386 41 726 851</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
