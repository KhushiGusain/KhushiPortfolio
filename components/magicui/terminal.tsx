"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedSpanProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedSpan = ({
  children,
  delay = 0,
  className,
  ...props
}: AnimatedSpanProps) => (
  <motion.div
    initial={{ opacity: 0, y: -5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: delay / 1000 }}
    className={cn("grid text-sm font-normal tracking-tight", className)}
    {...props}
  >
    {children}
  </motion.div>
);

interface TerminalTypingAnimationProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
}

export const TerminalTypingAnimation = ({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = "span",
  ...props
}: TerminalTypingAnimationProps) => {
  if (typeof children !== "string") {
    throw new Error("TerminalTypingAnimation: children must be a string. Received:");
  }

  const MotionComponent = motion(Component);

  const [displayedText, setDisplayedText] = useState<string>("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [children, duration, started]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn("text-sm font-normal tracking-tight", className)}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  );
};

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
}

export const Terminal = ({ children, className }: TerminalProps) => {
  return (
    <div
      className={cn(
        "z-0 h-full w-full rounded-xl border border-[#EBE8DB] bg-white shadow-xl",
        className,
      )}
    >
      <div className="flex flex-col gap-y-2 border-b border-[#EBE8DB] p-4 bg-gradient-to-r from-[#F5F5F4] to-[#EBE8DB]">
        <div className="flex flex-row gap-x-2">
          <div className="h-3 w-3 rounded-full bg-[#B03052]"></div>
          <div className="h-3 w-3 rounded-full bg-[#D76C82]"></div>
          <div className="h-3 w-3 rounded-full bg-[#EBE8DB] border border-[#D6D3D1]"></div>
        </div>
      </div>
      <pre className="p-6 bg-white">
        <code className="grid gap-y-3 overflow-auto text-[#3D0301] font-medium">{children}</code>
      </pre>
    </div>
  );
};
