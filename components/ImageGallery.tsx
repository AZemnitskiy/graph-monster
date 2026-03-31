"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface Slide {
  src: string;
  alt: string;
}

export default function ImageGallery({ slides, href }: { slides: Slide[]; href: string }) {
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => setCurrent(index);
  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((i) => (i + 1) % slides.length);
    }, 3000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div
      className="relative rounded-lg overflow-hidden border"
      style={{ borderColor: "var(--border)" }}
    >
      {/* Stacked slides — CSS crossfade */}
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative w-full" style={{ aspectRatio: "1200 / 680" }}>
          {slides.map((slide, i) => (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              style={{
                opacity: i === current ? 1 : 0,
                transition: "opacity 600ms ease-in-out",
              }}
              priority={i === 0}
            />
          ))}
        </div>
      </a>

      {/* Prev / Next */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full"
        style={{ backgroundColor: "rgba(0,0,0,0.45)", color: "#fff" }}
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full"
        style={{ backgroundColor: "rgba(0,0,0,0.45)", color: "#fff" }}
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="w-2 h-2 rounded-full transition-colors"
            style={{ backgroundColor: i === current ? "#fff" : "rgba(255,255,255,0.45)" }}
          />
        ))}
      </div>
    </div>
  );
}
