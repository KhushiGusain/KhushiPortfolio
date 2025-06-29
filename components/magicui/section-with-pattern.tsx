"use client";

import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionWithPatternProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionWithPattern({ children, className, id }: SectionWithPatternProps) {
  return (
    <section id={id} className={cn("py-12 sm:py-20 px-4 bg-transparent relative overflow-hidden", className)}>
      <AnimatedGridPattern
        numSquares={50}
        maxOpacity={0.2}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
} 