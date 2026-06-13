import { useEffect, useState } from "react";
import ToggleDarkMode from "../ToggleDarkMode";
import Search from "../search/Search";
import Hamburger from "./Hamburger";
import { info } from "../../data/info";

export default function Nav({ posts }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const base = import.meta.env.BASE_URL;
  const navLinks = [
    { name: "About", href: `${base}#about` },
    { name: "Projects", href: `${base}#projects` },
    { name: "Blog", href: `${base}#blog` },
    { name: "Contact", href: `${base}#contact` },
  ];

  const extractInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n.charAt(0))
      .join("");
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-primary/95 dark:bg-dk-primary/95 backdrop-blur-md shadow-md shadow-secondary/10"
            : "bg-primary/80 dark:bg-dk-primary/80 backdrop-blur-sm"
        } border-b-2 border-secondary/40`}
      >
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <a className="font-display font-bold text-2xl lg:text-3xl" href={base}>
            <span className="text-secondary">{"</"}</span>
            <span className="text-accent dark:text-dk-accent">
              {extractInitials(info.name)}
            </span>
            <span className="text-secondary">{"/>"}</span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            <ul className="flex items-center gap-1 text-lg font-medium">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="px-4 py-2 rounded-full text-text dark:text-dk-text hover:text-secondary dark:hover:text-dk-secondary hover:bg-secondary/10 transition-all duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-secondary/30">
              <ToggleDarkMode />
              <Search posts={posts} />
            </div>
          </div>

          {/* CV download button */}
          <a
            href={info.cv}
            download
            className="hidden lg:inline-flex items-center gap-2 bg-secondary hover:bg-accent text-white font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-secondary/30 text-sm ml-4"
          >
            <i className="fas fa-download text-xs"></i>
            Download CV
          </a>

          {/* Mobile: CV + Hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={info.cv}
              download
              className="text-secondary border border-secondary rounded-full px-3 py-1 text-sm font-semibold"
            >
              CV
            </a>
            <div className="text-secondary">
              <Hamburger
                onClick={() => setIsNavOpen(!isNavOpen)}
                isNavOpen={isNavOpen}
              />
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`${
            isNavOpen ? "block" : "hidden"
          } lg:hidden bg-primary dark:bg-dk-primary border-t border-secondary/20`}
        >
          <ul className="flex flex-col px-6 py-4 gap-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  onClick={() => setIsNavOpen(false)}
                  className="block py-2 px-4 rounded-lg text-text dark:text-dk-text hover:text-secondary hover:bg-secondary/10 font-medium transition-all"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-4 pt-2 pl-4">
              <ToggleDarkMode />
              <Search posts={posts} />
            </li>
          </ul>
        </div>
      </nav>

      {isNavOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsNavOpen(false)}
        />
      )}
    </>
  );
}
