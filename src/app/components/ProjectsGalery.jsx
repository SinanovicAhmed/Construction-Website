import { useRef } from "react";
import { projects } from "../constants/projects";
import Image from "next/image";
import LeftArrowSVG from "../../../public/svg/LeftArrowSVG";
import RightArrowSVG from "../../../public/svg/RightArrowSVG";

const ProjectsGalery = ({ type }) => {
  const projectsOfType = projects[type];
  const scrollElement = useRef(null);

  const scroll = (scrollOffset) => {
    scrollElement.current.scrollBy({
      left: scrollOffset,
      behavior: "smooth",
    });
  };

  if (!projectsOfType) {
    return <p>Something went wrong</p>;
  }

  return (
    <div>
      <div ref={scrollElement} className="flex gap-4 overflow-auto h-[420px]">
        {projectsOfType.map((image, indx) => {
          return (
            <Image
              key={indx}
              className="w-auto h-[400px] object-cover rounded-3xl py-2"
              src={image}
              alt=""
              quality={100}
              width={400}
              height={400}
            />
          );
        })}
      </div>
      <div className="flex w-full justify-end gap-4 pt-4">
        <button
          className="w-10 flex items-center justify-center"
          aria-label="scroll left"
          onClick={() => scroll(-300)}
        >
          <LeftArrowSVG />
        </button>
        <button
          className="w-10 flex items-center justify-center"
          aria-label="scroll right"
          onClick={() => scroll(300)}
        >
          <RightArrowSVG />
        </button>
      </div>
    </div>
  );
};

export default ProjectsGalery;
