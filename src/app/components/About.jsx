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
              Sistem za nadzor kakovosti, 100% jamstvo zadovoljstva
            </p>
          </span>
          <span className="flex gap-2">
            <CheckmarkSVG />
            <p className="text-white text-sm lg:text-base font-light">
              Visoko strokovno osebje, natančni testni postopki
            </p>
          </span>
          <span className="flex gap-2">
            <CheckmarkSVG />
            <p className="text-white text-sm lg:text-base font-light">
              Neprimerljivo obrtništvo, strokovno in usposobljeno
            </p>
          </span>
        </div>
        <div className="w-full flex gap-8 py-10">
          <span className="flex items-center gap-2">
            <h2 className="text-primary_orange font-bold text-xl sm:text-3xl">25+</h2>
            <p className="text-white text-sm">
              Let
              <br /> izkušenj
            </p>
          </span>
          <span className="flex items-center gap-2">
            <h2 className="text-primary_orange font-bold text-xl sm:text-3xl">80+</h2>
            <p className="text-white text-sm">
              Projektov
              <br /> zaključenih
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
              <span className="text-primary_orange">25 Let</span>
              <br /> izkušenj!
            </h2>
            <p className="text-sm lg:text-base text-white font-light">
              Imamo ekipo izkušenih strokovnjakov, ki so v industriji že več kot 25 let. Naši
              izvajalci imajo bogato znanje in spretnosti, ki so jih pridobili skozi leta, kar jih
              naredi za strokovnjake na svojem področju.
              <br />
              <br /> S 25 leti izkušenj imajo naši izvajalci globoko razumevanje industrijskih
              standardov in predpisov. Zagotavljamo, da vsi naši projekti ustrezajo najnovejšim
              varnostnim in gradbenim standardom ter da končni izdelek izpolnjuje ali presega
              pričakovanja naših strank.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
