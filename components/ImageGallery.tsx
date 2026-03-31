"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface Slide {
  src: string;
  alt: string;
}

interface Props {
  slides: Slide[];
  href: string;
  imgWidth: number;
  imgHeight: number;
}

const TRANSITION = 900;
const INTERVAL = 3000;

export default function ImageGallery({ slides, href, imgWidth, imgHeight }: Props) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(-1);
  const currentRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // keep ref in sync so the interval always reads the latest current
  useEffect(() => { currentRef.current = current; }, [current]);

  const goTo = (next: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setPrev(currentRef.current);
    setCurrent(next);
    // after the fade completes, reset prev to -1 so it returns to opacity:0
    // — this ensures the NEXT time it becomes "current" it starts from 0 and fades in
    timeoutRef.current = setTimeout(() => setPrev(-1), TRANSITION + 50);
  };

  useEffect(() => {
    const id = setInterval(() => {
      const next = (currentRef.current + 1) % slides.length;
      goTo(next);
    }, INTERVAL);
    return () => {
      clearInterval(id);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides.length]);

  return (
    <div
      className="relative rounded-lg overflow-hidden border"
      style={{ borderColor: "var(--border)" }}
    >
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        <div
          className="relative w-full"
          style={{ aspectRatio: `${imgWidth} / ${imgHeight}` }}
        >
          {slides.map((slide, i) => (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-contain"
              priority
              style={{
                opacity: i === current ? 1 : i === prev ? 1 : 0,
                zIndex: i === current ? 2 : i === prev ? 1 : 0,
                transition: i === current
                  ? `opacity ${TRANSITION}ms ease-in-out`
                  : "none",
              }}
            />
          ))}
        </div>
      </a>

      {/* Prev / Next */}
      <button
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full"
        style={{ backgroundColor: "rgba(0,0,0,0.45)", color: "#fff", zIndex: 10 }}
      >
        ‹
      </button>
      <button
        onClick={() => goTo((current + 1) % slides.length)}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full"
        style={{ backgroundColor: "rgba(0,0,0,0.45)", color: "#fff", zIndex: 10 }}
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2" style={{ zIndex: 10 }}>
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
