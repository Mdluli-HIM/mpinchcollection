"use client";

import Lenis from "lenis";
import { useEffect } from "react";

import { ScrollTrigger, gsap } from "@/lib/gsap";

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.05,
    });

    const updateScroll = () => ScrollTrigger.update();
    lenis.on("scroll", updateScroll);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", updateScroll);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
