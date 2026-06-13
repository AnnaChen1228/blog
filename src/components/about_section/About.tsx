import React from "react";
import { info } from "../../data/info";
import Education from "./Education";
import Experience from "./Experience";
import Honors from "./Honors";
import Skills from "./Skills";

interface AboutProps {
  about: (typeof info)["about"];
  showHeading?: boolean;
}

export default function About({ about, showHeading = true }: AboutProps) {
  return (
    <div className="flex flex-col items-center w-full space-y-10">
      {/* Section header + intro */}
      <div className="w-full lg:w-3/4 xl:w-2/3 px-4">
        {showHeading && (
          <h1 className="text-4xl lg:text-5xl font-display font-bold section-heading mb-6 text-text dark:text-dk-text">
            About Me
          </h1>
        )}
        <div className="bg-card-bg dark:bg-dk-card-bg border-l-4 border-secondary rounded-r-2xl p-6 shadow-sm">
          <p className="text-lg leading-relaxed text-text/80 dark:text-dk-text/80">
            {about.description}
          </p>
        </div>
      </div>

      {/* Education & Experience */}
      <div className="w-full lg:w-3/4 xl:w-2/3 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Education education={about.education} />
        <Experience experience={about.experience} />
      </div>

      {/* Honors & Skills */}
      <div className="w-full lg:w-3/4 xl:w-2/3 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Honors honors={about.honors} />
        <Skills skills={about.skills} />
      </div>
    </div>
  );
}
