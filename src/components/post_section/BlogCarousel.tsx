import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Post {
  title: string;
  date: string;
  url: string;
  excerpt?: string;
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function BlogCard({ p }: { p: Post }) {
  return (
    <a
      href={p.url}
      className="group flex flex-col h-44 bg-card-bg dark:bg-dk-card-bg rounded-2xl p-6 border border-secondary/20 hover:border-secondary/50 shadow-sm hover:shadow-md hover:shadow-secondary/10 transition-colors duration-300"
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
        <span className="text-secondary text-xs font-semibold uppercase tracking-wider">
          {p.date}
        </span>
      </div>
      <h2 className="text-lg font-display font-bold text-text dark:text-dk-text group-hover:text-secondary dark:group-hover:text-dk-secondary transition-colors line-clamp-1">
        {p.title}
      </h2>
      {p.excerpt && (
        <p className="mt-1 text-sm text-text/60 dark:text-dk-text/60 leading-relaxed line-clamp-2">
          {p.excerpt}
        </p>
      )}
      <span className="inline-flex items-center gap-1.5 text-secondary group-hover:text-accent font-semibold text-sm mt-auto pt-2">
        Read more
        <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform duration-200" />
      </span>
    </a>
  );
}

export default function BlogCarousel({ posts }: { posts: Post[] }) {
  const rows = chunk(posts, 2);

  // Rows visible: 2 when there's room (>=1024), else 1. Changing this remounts
  // the slider (key) — a fresh mount, which avoids slick's vertical re-init bug
  // that makes it collapse/vanish on resize.
  const [shown, setShown] = useState(() =>
    typeof window !== "undefined" && window.innerWidth >= 1024 ? 2 : 1
  );
  useEffect(() => {
    const update = () => setShown(window.innerWidth >= 1024 ? 2 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const slidesToShow = Math.min(shown, rows.length);
  const settings = {
    dots: true,
    arrows: false,
    infinite: rows.length > slidesToShow,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 600,
    slidesToShow,
    slidesToScroll: 1,
    dotsClass: "slick-dots",
  };

  return (
    <div className="dots-right relative pr-12">
      <Slider key={slidesToShow} {...settings}>
        {rows.map((row, i) => (
          <div key={i}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-5">
              {row.map((p) => (
                <BlogCard key={p.url} p={p} />
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
