"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ComponentPropsWithoutRef,
  useId,
} from "react";

import { cn } from "@/lib/utils";

export interface AnimatedGridPatternProps
  extends ComponentPropsWithoutRef<"svg"> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: string | number;
  numSquares?: number;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
  patternColor?: string;
  bgColor?: string;
  className?: string;
}

interface Square {
  x: number;
  y: number;
  delay: number;
  duration: number;
}

export function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  className,
  patternColor = '#E5E7EB20',
  bgColor = 'transparent',
  numSquares,
  maxOpacity,
  duration,
  repeatDelay,
  ...props
}: AnimatedGridPatternProps) {
  const id = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [squares, setSquares] = useState<Square[]>([]);

  const generateSquares = () => {
    if (!containerRef.current) return;

    const { width, height } = containerRef.current.getBoundingClientRect();

    const squareSize = 40;
    const numCols = Math.ceil(width / squareSize);
    const numRows = Math.ceil(height / squareSize);

    const newSquares: Square[] = [];

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const delay = Math.random() * 0.2;
        const duration = 0.2 + Math.random() * 0.3;

        newSquares.push({
          x: col * squareSize,
          y: row * squareSize,
          delay,
          duration,
        });
      }
    }

    setSquares(newSquares);
  };

  useEffect(() => {
    generateSquares();

    const handleResize = () => {
      generateSquares();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      generateSquares();
    });

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`} style={{ background: bgColor }}>
      <svg
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
          className,
        )}
        {...props}
      >
        <defs>
          <pattern
            id={id}
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
            x={x}
            y={y}
          >
            <path
              d={`M.5 ${height}V.5H${width}`}
              fill="none"
              strokeDasharray={strokeDasharray}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
        <svg x={x} y={y} className="overflow-visible">
          {squares.map((square, index) => {
            const key = `${square.x}-${square.y}-${index}`;
            return (
              <motion.div
                key={key}
                className="absolute border border-gray-200/20"
                style={{
                  width: '40px',
                  height: '40px',
                  x: square.x,
                  y: square.y,
                  borderColor: patternColor,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: square.duration,
                  delay: square.delay,
                  ease: 'easeInOut',
                }}
              />
            );
          })}
        </svg>
      </svg>
    </div>
  );
} 