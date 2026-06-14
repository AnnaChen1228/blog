import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Project {
  title: string;
  date: string;
  description: string;
  link: string;
  tech: string[];
  icon?: string;
  badge?: string;
}

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  // Horizontal (left↔right) cycle. How many show is decided by the viewport.
  // Cards are tall so the full description shows (projects aren't click-through).
  const settings = {
    dots: true,
    arrows: false,
    infinite: projects.length > 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    slidesToShow: Math.min(3, projects.length),
    slidesToScroll: 1,
    swipeToSlide: true,
    dotsClass: "slick-dots !bottom-[-2rem]",
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: Math.min(2, projects.length) },
      },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="project-row relative pb-10">
      <Slider {...settings}>
        {projects.map((p, i) => (
          <div key={i} className="px-2.5 pb-2 h-full">
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col h-full bg-card-bg dark:bg-dk-card-bg rounded-2xl p-6 border border-secondary/20 hover:border-secondary/50 shadow-sm hover:shadow-md hover:shadow-secondary/10 transition-colors duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                {p.icon && <i className={`${p.icon} text-secondary text-xl`} />}
                <span className="text-secondary text-xs font-semibold uppercase tracking-wider">
                  {p.date}
                </span>
                {p.link && (
                  <span className="ml-auto inline-flex items-center gap-1 text-secondary group-hover:text-accent text-xs font-semibold whitespace-nowrap">
                    See project
                    <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-0.5 transition-transform duration-200" />
                  </span>
                )}
              </div>
              {p.badge && (
                <span className="self-start mb-2 text-xs font-bold bg-secondary text-white px-2.5 py-0.5 rounded-full">
                  {p.badge}
                </span>
              )}
              <h2 className="text-lg font-display font-bold text-text dark:text-dk-text group-hover:text-secondary dark:group-hover:text-dk-secondary transition-colors">
                {p.title}
              </h2>
              <p className="mt-2 flex-1 text-sm text-text/60 dark:text-dk-text/60 leading-relaxed">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-secondary/10">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold bg-secondary/10 text-secondary px-2 py-0.5 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}
