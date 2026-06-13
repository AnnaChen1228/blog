import React from "react";
import { info } from "../../data/info";

interface ExperienceProps {
  experience: (typeof info)["about"]["experience"];
}

export default function Experience(props: ExperienceProps) {
  const { experience } = props;

  if (experience.length === 0) return <div />;

  return (
    <div className="flex flex-col space-y-6">
      <h2 className="text-2xl font-display font-bold section-heading text-text dark:text-dk-text pb-2">
        Experience
      </h2>

      <div className="relative flex flex-col space-y-6">
        {/* Vertical timeline line */}
        <div className="absolute left-3 top-3 bottom-3 w-0.5 bg-secondary/30 rounded-full" />

        {experience.map((exp, index) => (
          <div key={index} className="relative flex gap-4">
            {/* Dot */}
            <div className="flex-shrink-0 mt-1">
              <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center z-10 relative shadow-md shadow-secondary/30">
                <i className="fas fa-briefcase text-white text-xs" />
              </div>
            </div>

            {/* Content card */}
            <div className="flex-1 bg-card-bg dark:bg-dk-card-bg rounded-xl p-4 border border-secondary/20 shadow-sm hover:shadow-md hover:border-secondary/40 transition-all duration-200">
              <h3 className="font-semibold text-base text-text dark:text-dk-text mb-0.5">
                {exp.title}
              </h3>
              <p className="text-secondary font-semibold text-sm">{exp.company}</p>
              <p className="text-text/50 dark:text-dk-text/50 text-xs mt-1">
                {exp.date} · {exp.location}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-text/70 dark:text-dk-text/70 whitespace-pre-wrap">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
