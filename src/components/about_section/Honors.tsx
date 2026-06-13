import React from "react";
import { info } from "../../data/info";

interface HonorsProps {
  honors: (typeof info)["about"]["honors"];
}

export default function Honors(props: HonorsProps) {
  const { honors } = props;

  if (!honors || honors.length === 0) return <div />;

  return (
    <div className="flex flex-col space-y-6">
      <h2 className="text-2xl font-display font-bold section-heading text-text dark:text-dk-text pb-2">
        Honors & Awards
      </h2>

      <div className="grid grid-cols-1 gap-3">
        {honors.map((honor, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-card-bg dark:bg-dk-card-bg rounded-xl p-4 border border-secondary/20 hover:border-secondary/40 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
              <i className={`${honor.icon} text-secondary`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-sm text-text dark:text-dk-text leading-snug">
                  {honor.title}
                </h3>
                <span className="flex-shrink-0 text-xs font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">
                  {honor.date}
                </span>
              </div>
              {honor.detail && (
                <p className="text-xs text-text/55 dark:text-dk-text/55 mt-1 leading-relaxed">
                  {honor.detail}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
