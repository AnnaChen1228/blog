import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Post {
  title: string;
  date: string;
  url: string;
  excerpt?: string;
}

export default function BlogCarousel({ posts }: { posts: Post[] }) {
  // With 2 rows, show an even count so columns are always full (no lone card).
  const items = posts.length % 2 === 0 ? posts : posts.slice(0, posts.length - 1);
  const allHref = `${import.meta.env.BASE_URL}posts`;

  const settings = {
    dots: true,
    arrows: false,
    infinite: items.length > 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    slidesToShow: Math.min(3, items.length),
    slidesToScroll: 1,
    rows: 2,
    slidesPerRow: 1,
    swipeToSlide: true,
    // Dots and "All Posts" share one row at the bottom.
    appendDots: (dots: React.ReactNode) => (
      <div className="!static">
        <div className="relative flex items-center justify-center mt-3 px-2">
          <ul className="slick-dots !static !flex !w-auto !m-0">{dots}</ul>
          <a
            href={allHref}
            className="absolute right-1 inline-flex items-center gap-1.5 text-secondary hover:text-accent font-semibold text-sm"
          >
            All Posts
            <i className="fas fa-arrow-right text-xs" />
          </a>
        </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: Math.min(2, items.length), rows: 2 },
      },
      { breakpoint: 768, settings: { slidesToShow: 1, rows: 2 } },
    ],
  };

  return (
    <div className="blog-carousel relative pb-2">
      <Slider {...settings}>
        {items.map((post, i) => (
          <div key={i} className="px-2.5 pb-5">
            <a
              href={post.url}
              className="group flex flex-col h-56 bg-card-bg dark:bg-dk-card-bg rounded-2xl p-6 border border-secondary/20 hover:border-secondary/50 shadow-sm hover:shadow-md hover:shadow-secondary/10 transition-colors duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                <span className="text-secondary text-xs font-semibold uppercase tracking-wider">
                  {post.date}
                </span>
              </div>
              <h2 className="text-lg font-display font-bold text-text dark:text-dk-text group-hover:text-secondary dark:group-hover:text-dk-secondary transition-colors line-clamp-2">
                {post.title}
              </h2>
              {post.excerpt && (
                <p className="mt-2 text-sm text-text/60 dark:text-dk-text/60 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              )}
              <span className="inline-flex items-center gap-1.5 text-secondary group-hover:text-accent font-semibold text-sm mt-auto pt-4">
                Read more
                <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}
