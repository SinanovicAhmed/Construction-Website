"use client";

import ConstructionWorkTabs from "./ConstructionWorkTabs";
import ProjectsGalery from "./ProjectsGalery";
import { useState } from "react";

const Projects = () => {
  const [activeType, setActiveType] = useState("allwork");

  return (
    <section id="projects" className="w-full scroll-mt-24 bg-primary_orange">
      <div className="mx-auto w-full max-w-[1280px] py-6 md:py-14 px-6 md:px-10">
        <div className="w-full flex flex-col md:flex-row justify-between items-center pb-10">
          <h2 className="text-3xl lg:text-5xl font-bold">Featured projects</h2>
          <ConstructionWorkTabs setActiveType={setActiveType} />
        </div>
        <ProjectsGalery type={activeType} />
      </div>
    </section>
  );
};

export default Projects;
