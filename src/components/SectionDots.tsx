import { useState, useEffect } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

export default function SectionDots() {
  const [active, setActive] = useState("home");
  const base = import.meta.env.BASE_URL;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`${base}#${id}`}
          aria-label={label}
          className="group flex items-center justify-end gap-2"
        >
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-200 text-xs font-medium text-secondary whitespace-nowrap bg-primary dark:bg-dk-primary px-2 py-0.5 rounded shadow-sm">
            {label}
          </span>
          <div
            className={`rounded-full transition-all duration-300 ${
              active === id
                ? "w-3 h-3 bg-secondary shadow-md shadow-secondary/40"
                : "w-2 h-2 bg-text/20 dark:bg-dk-text/20 hover:bg-secondary/60"
            }`}
          />
        </a>
      ))}
    </div>
  );
}
