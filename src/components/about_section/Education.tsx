import React from "react";
import { info } from "../../data/info";

interface EducationProps {
  education: (typeof info)["about"]["education"];
}

export default function Education(props: EducationProps) {
  const { education } = props;

  if (education.length === 0) return <div />;

  return (
    <div className="flex flex-col space-y-6">
      <h2 className="text-2xl font-display font-bold section-heading text-text dark:text-dk-text pb-2">
        Education
      </h2>

      <div className="relative flex flex-col space-y-6">
        {/* Vertical timeline line */}
        <div className="absolute left-3 top-3 bottom-3 w-0.5 bg-secondary/30 rounded-full" />

        {education.map((edu, index) => (
          <div key={index} className="relative flex gap-4">
            {/* Dot */}
            <div className="flex-shrink-0 mt-1">
              <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center z-10 relative shadow-md shadow-secondary/30">
                <i className="fas fa-graduation-cap text-white text-xs" />
              </div>
            </div>

            {/* Content card */}
            <div className="flex-1 bg-card-bg dark:bg-dk-card-bg rounded-xl p-4 border border-secondary/20 shadow-sm hover:shadow-md hover:border-secondary/40 transition-all duration-200">
              <h3 className="font-semibold text-base leading-snug text-text dark:text-dk-text mb-1">
                {edu.title}
              </h3>
              <p className="text-secondary font-semibold text-sm">{edu.location}</p>
              <p className="text-text/50 dark:text-dk-text/50 text-xs mt-1">{edu.date}</p>
              {edu.gpa && (
                <span className="inline-block mt-2 text-xs bg-secondary/10 text-secondary font-semibold px-2 py-0.5 rounded-full">
                  GPA: {edu.gpa}
                </span>
              )}
              {edu.thesis && edu.thesis.length > 0 && (
                <div className="mt-3 space-y-1.5">
                  <p className="text-xs font-bold text-text/60 dark:text-dk-text/60 uppercase tracking-wider">
                    Publications / Thesis
                  </p>
                  {edu.thesis.map((item, tIndex) => (
                    <div key={tIndex} className="flex gap-1.5 items-start">
                      <span className="text-secondary mt-0.5 text-xs flex-shrink-0">▸</span>
                      <p className="text-xs leading-relaxed text-text/70 dark:text-dk-text/70">
                        {item.name}
                        <span className="italic text-secondary/80 ml-1">
                          — {item.conference}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
