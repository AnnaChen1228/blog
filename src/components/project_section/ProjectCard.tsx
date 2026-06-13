import { info } from "../../data/info";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface ProjectCardProps {
  project: (typeof info)["projects"][number] & {
    icon?: string;
    badge?: string;
    img_path?: string;
  };
}

export default function ProjectCard(props: ProjectCardProps) {
  const { project } = props;
  const hasImg = Boolean(project.img_path);

  return (
    <div className="flex flex-col h-full bg-card-bg dark:bg-dk-card-bg rounded-2xl overflow-hidden border border-secondary/20 hover:border-secondary/50 shadow-sm hover:shadow-lg hover:shadow-secondary/10 transition-all duration-300 group">
      {/* Header: image OR icon fallback */}
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        aria-label={project.img_alt}
        className="relative flex-shrink-0 block h-40 overflow-hidden"
      >
        {hasImg ? (
          <LazyLoadImage
            className="h-40 w-full object-cover group-hover:scale-105 transition-transform duration-500"
            src={project.img_path}
            alt={project.img_alt}
            width="100%"
            effect="blur"
          />
        ) : (
          <div className="h-40 w-full flex items-center justify-center bg-gradient-to-br from-secondary/20 via-secondary/10 to-transparent dark:from-secondary/15 dark:to-dk-card-bg">
            <i
              className={`${project.icon ?? "fas fa-code"} text-5xl text-secondary/70 group-hover:scale-110 transition-transform duration-300`}
            />
          </div>
        )}

        {/* Badge */}
        {project.badge && (
          <span className="absolute top-3 left-3 bg-secondary text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
            {project.badge}
          </span>
        )}
      </a>

      {/* Yellow accent bar */}
      <div className="h-1 bg-gradient-to-r from-secondary to-accent w-full" />

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col gap-3">
        <div className="flex-1">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="font-display font-semibold text-base text-text dark:text-dk-text hover:text-secondary dark:hover:text-dk-secondary transition-colors line-clamp-2"
          >
            {project.title}
          </a>
          <p className="mt-2 text-sm text-text/60 dark:text-dk-text/60 leading-relaxed line-clamp-4">
            {project.description}
          </p>
        </div>

        <div className="flex flex-col gap-3 mt-auto pt-3 border-t border-secondary/10">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs font-semibold bg-secondary/10 text-secondary px-2 py-0.5 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <span className="text-xs text-text/40 dark:text-dk-text/40 font-medium">
            {project.date}
          </span>
        </div>
      </div>
    </div>
  );
}
