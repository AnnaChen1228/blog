import React from "react";
import { info } from "../../data/info";

interface SkillsProps {
  skills: (typeof info)["about"]["skills"];
}

export default function Skills(props: SkillsProps) {
  const { skills } = props;

  if (!skills || skills.length === 0) return <div />;

  return (
    <div className="flex flex-col space-y-6">
      <h2 className="text-2xl font-display font-bold section-heading text-text dark:text-dk-text pb-2">
        Skills
      </h2>

      <div className="flex flex-col gap-5">
        {skills.map((group, index) => (
          <div key={index}>
            <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-sm font-medium bg-card-bg dark:bg-dk-card-bg border border-secondary/25 text-text/80 dark:text-dk-text/80 px-3 py-1 rounded-full hover:border-secondary hover:text-secondary transition-all duration-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
