"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const sections = Array.from(document.querySelectorAll<HTMLElement>("section"));
    if (sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    sections.forEach((s) => {
      if (!s.classList.contains("reveal-in")) {
        s.classList.add("reveal");
        io.observe(s);
      }
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
