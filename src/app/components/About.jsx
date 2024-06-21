import Image from "next/image";
import CheckmarkSVG from "../../../public/svg/CheckmarkSVG";

const About = () => {
  return (
    <section id="about" className="w-full scroll-mt-24 bg-primary_gray">
      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="absolute hidden lg:block bg-primary_orange top-0 right-10 transform -translate-y-1/2 text-center rounded-lg p-6 space-y-4">
          <span className="flex gap-2">
            <CheckmarkSVG />
            <p className="text-white text-sm lg:text-base font-light">
              Quality Control System, 100% Satisfaction Guarantee
            </p>
          </span>
          <span className="flex gap-2">
            <CheckmarkSVG />
            <p className="text-white text-sm lg:text-base font-light">
              Highly Proffesional Staff, Accurate Testing Processes
            </p>
          </span>
          <span className="flex gap-2">
            <CheckmarkSVG />
            <p className="text-white text-sm lg:text-base font-light">
              Unrivalled Workmanship, Proffesional and Qualified
            </p>
          </span>
        </div>
        <div className="w-full flex gap-8 py-10 sm:py-12">
          <span className="flex items-center gap-2">
            <h2 className="text-primary_orange font-bold text-xl sm:text-3xl">25+</h2>
            <p className="text-white text-sm">
              Years of
              <br /> Experience
            </p>
          </span>
          <span className="flex items-center gap-2">
            <h2 className="text-primary_orange font-bold text-xl sm:text-3xl">80+</h2>
            <p className="text-white text-sm">
              Projects
              <br /> completed
            </p>
          </span>
        </div>

        <div className="flex justify-between items-end gap-2 lg:gap-24">
          <div className="relative hidden md:block flex-none w-[300px] h-[300px] lg:h-[400px] lg:w-[400px]">
            <Image
              src="/about_image.png"
              alt="About section image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="grow space-y-8 pb-10 lg:py-20">
            <h2 className="text-3xl lg:text-5xl text-white font-extrabold leading-snug">
              <span className="text-primary_orange">25 Years</span>
              <br /> of Experience!
            </h2>
            <p className="text-sm lg:text-base text-white font-light">
              We have a team of experienced professionals who have been in the industry for over 25
              years. Our contractors have a wealth of knowledge and skills that they have acquired
              over the years, making them experts in their field.
              <br />
              <br /> With 25 years of experience, our contractors have a deep understanding of
              industry standards and regulations. We ensure that all our projects comply with the
              latest safety and building codes, and that the final product meets or exceeds our
              clients expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
