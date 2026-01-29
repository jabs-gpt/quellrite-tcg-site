"use client";

import { useRef, useEffect, useMemo, useState } from "react";

export default function CardScroller({ images }: { images: string[] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const [step, setStep] = useState(0);

  // clone images for infinite loop
  const looped = useMemo(() => [...images, ...images, ...images], [images]);

  // measure one card
  useEffect(() => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setStep(rect.width + 48); // gap-12
  }, []);

  const prev = () => {
    if (!ref.current || !step) return;
    ref.current.scrollBy({ left: -step, behavior: "smooth" });
  };

  const next = () => {
    if (!ref.current || !step) return;
    ref.current.scrollBy({ left: step, behavior: "smooth" });
  };

  // center initial
  useEffect(() => {
    if (!ref.current || !step) return;
    ref.current.scrollLeft = step * images.length;
  }, [step, images.length]);

  // infinite loop correction
  useEffect(() => {
    if (!ref.current || !step) return;
    const node = ref.current;

    const onScroll = () => {
      const max = node.scrollWidth - node.clientWidth;
      if (node.scrollLeft < step) {
        node.scrollLeft += step * images.length;
      } else if (node.scrollLeft > max - step) {
        node.scrollLeft -= step * images.length;
      }
    };

    node.addEventListener("scroll", onScroll, { passive: true });
    return () => node.removeEventListener("scroll", onScroll);
  }, [step, images.length]);

  return (
    <section
      className="relative pt-1 pb-2"
      style={{
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
      }}
    >
      <div className="relative flex items-center px-8 lg:px-24">
        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="hidden sm:flex z-30 bg-black/80 text-white rounded-full w-14 h-14 items-center justify-center text-3xl hover:bg-black/90"
        >
          ‹
        </button>

        {/* SCROLLER */}
        <div className="flex-1 overflow-hidden">
          <div
            ref={ref}
            onMouseDown={(e) => {
              isDown.current = true;
              startX.current = e.pageX;
              scrollLeft.current = ref.current!.scrollLeft;
              ref.current!.classList.add("cursor-grabbing");
            }}
            onMouseMove={(e) => {
              if (!isDown.current || !ref.current) return;
              ref.current.scrollLeft =
                scrollLeft.current - (e.pageX - startX.current) * 1.4;
            }}
            onMouseUp={() => (isDown.current = false)}
            onMouseLeave={() => (isDown.current = false)}
            className="flex gap-12 overflow-x-auto hide-scrollbar cursor-grab select-none pt-6 pb-12"
          >
            {looped.map((src, i) => (
              <div
                key={`${src}-${i}`}
                ref={i === images.length ? cardRef : null}
                className="flex-shrink-0 lg:h-[72vh] 2xl:h-[78vh] aspect-[2/3] group overflow-hidden rounded-xl"
                onMouseEnter={(e) => {
                  const inner = e.currentTarget.querySelector(
                    ".tilt-inner"
                  ) as HTMLElement | null;
                  if (!inner) return;
                  inner.style.transition = "transform 120ms ease";
                  inner.style.transform =
                    "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1.04)";
                }}
                onMouseMove={(e) => {
                  const inner = e.currentTarget.querySelector(
                    ".tilt-inner"
                  ) as HTMLElement | null;
                  if (!inner) return;
                  const rect = e.currentTarget.getBoundingClientRect();
                  const px = (e.clientX - rect.left) / rect.width;
                  const py = (e.clientY - rect.top) / rect.height;
                  const rotY = (px - 0.5) * 25;
                  const rotX = -(py - 0.5) * 25;
                  inner.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.08)`;
                }}
                onMouseLeave={(e) => {
                  const inner = e.currentTarget.querySelector(
                    ".tilt-inner"
                  ) as HTMLElement | null;
                  if (!inner) return;
                  inner.style.transition = "transform 180ms ease";
                  inner.style.transform =
                    "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
                }}
              >
                <div className="tilt-inner w-full h-full will-change-transform">
                  <img
                    src={src}
                    draggable={false}
                    className="w-full h-full object-contain select-none"
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="hidden sm:flex z-30 bg-black/80 text-white rounded-full w-14 h-14 items-center justify-center text-3xl hover:bg-black/90"
        >
          ›
        </button>
      </div>
    </section>
  );
}
