import React from "react";

const Footer = () => {
  return (
    <section className="w-full bg-primary_gray">
      <div className="mx-auto w-full max-w-[1280px] h-full py-8 px-6 md:px-10 text-white">
        <h2 className="font-unlock text-xl md:text-3xl pb-6">IntegraEM</h2>
        <div className="flex justify-between flex-col md:flex-row gap-4 md:gap-16">
          <div className="flex-grow-1 space-y-2">
            <h2>About us</h2>
            <p className="font-thin text-xs">
              We have the confidence to provide the best service for you, with the support of
              Professional and Certified HR that we currently have and the high-quality materials we
              use and structured work techniques, we will be able to realize timely completion of
              work.
            </p>
          </div>
          <div className="max-w-[400px] space-y-2 flex-shrink-0">
            <h2>Contact</h2>
            <p className="font-thin text-xs">Email : Lorem ipsum dolor sit amet</p>
            <p className="font-thin text-xs">Phone : Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
