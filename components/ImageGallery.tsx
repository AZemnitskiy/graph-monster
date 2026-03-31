"use client";

import Image from "next/image";
import { useState } from "react";

interface Slide {
  src: string;
  alt: string;
}

export default function ImageGallery({ slides, href }: { slides: Slide[]; href: string }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setCurrent((i) => (i + 1) % slides.length);

  return (
    <div
      className="relative rounded-lg overflow-hidden border"
      style={{ borderColor: "var(--border)" }}
    >
      {/* Image */}
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        <Image
          src={slides[current].src}
          alt={slides[current].alt}
          width={1200}
          height={680}
          className="w-full h-auto transition-opacity duration-300"
          priority={current === 0}
        />
      </a>

      {/* Prev / Next */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full transition-opacity"
        style={{ backgroundColor: "rgba(0,0,0,0.45)", color: "#fff" }}
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full transition-opacity"
        style={{ backgroundColor: "rgba(0,0,0,0.45)", color: "#fff" }}
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="w-2 h-2 rounded-full transition-colors"
            style={{ backgroundColor: i === current ? "#fff" : "rgba(255,255,255,0.45)" }}
          />
        ))}
      </div>
    </div>
  );
}
