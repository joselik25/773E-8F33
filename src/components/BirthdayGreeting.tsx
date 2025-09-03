"use client";

import { useState, useEffect, type CSSProperties } from 'react';

const CONFETTI_COUNT = 150;

interface ConfettiPiece {
  id: number;
  style: CSSProperties;
  color: string;
  shape: string;
}

const Confetti = () => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const newConfetti = Array.from({ length: CONFETTI_COUNT }).map((_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}vw`,
        animation: `fall ${Math.random() * 8 + 5}s ${
          Math.random() * 5
        }s linear infinite`,
      },
      color: Math.random() > 0.5 ? 'bg-primary' : 'bg-accent',
      shape: Math.random() > 0.5 ? 'w-2 h-4' : 'w-3 h-3 rounded-full',
    }));
    setConfetti(newConfetti);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {confetti.map(({ id, style, color, shape }) => (
        <div key={id} className={`absolute ${color} ${shape}`} style={style} />
      ))}
    </div>
  );
};

const BirthdayCake = () => {
  return (
    <div className="relative animate-cake-sway w-64 h-64 md:w-80 md:h-80">
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
        <ellipse cx="100" cy="170" rx="90" ry="15" className="fill-white/80" />

        <g>
          <rect
            x="30"
            y="130"
            width="140"
            height="35"
            rx="5"
            className="fill-secondary"
          />
          <path
            d="M 30 135 C 40 145, 60 145, 70 135 S 90 125, 100 135 S 120 145, 130 135 S 150 125, 160 135 S 180 145, 170 135 V 130 H 30 Z"
            className="fill-primary/50"
          />

          <rect
            x="40"
            y="100"
            width="120"
            height="30"
            rx="5"
            className="fill-secondary"
          />
          <path
            d="M 40 105 C 50 115, 65 115, 75 105 S 90 95, 100 105 S 115 115, 125 105 S 140 95, 150 105 S 165 115, 160 105 V 100 H 40 Z"
            className="fill-primary/50"
          />

          <rect
            x="50"
            y="70"
            width="100"
            height="30"
            rx="5"
            className="fill-secondary"
          />
          <path
            d="M 50 75 C 55 90, 65 90, 70 75 S 80 65, 85 75 S 95 90, 100 75 S 110 65, 115 75 S 125 90, 130 75 S 140 65, 145 75 S 155 90, 150 75 V 70 H 50 Z"
            className="fill-primary"
          />
        </g>

        <g>
          <rect x="95" y="40" width="10" height="30" className="fill-accent" />
          <rect x="97" y="42" width="6" height="28" className="fill-accent/70" />

          <line
            x1="100"
            y1="40"
            x2="100"
            y2="36"
            className="stroke-black"
            strokeWidth="1.5"
          />

          <g className="animate-flame-flicker">
            <path
              d="M 100 36 C 95 30, 105 30, 100 20 C 105 30, 95 30, 100 36 Z"
              className="fill-yellow-400"
            />
            <path
              d="M 100 34 C 97 30, 103 30, 100 24 C 103 30, 97 30, 100 34 Z"
              className="fill-orange-500/80"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default function BirthdayGreeting() {
  const greeting = 'Happy Birthday my Love';

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-primary p-4 overflow-hidden relative font-headline">
      <Confetti />

      <div className="z-10 flex flex-col items-center justify-center text-center gap-8 md:gap-12">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider text-primary drop-shadow-md">
          {greeting.split('').map((char, index) => (
            <span
              key={index}
              className="inline-block animate-text-fade-in-up"
              style={{ animationDelay: `${0.5 + index * 0.05}s` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        <div
          className="animate-text-fade-in-up"
          style={{ animationDelay: '1.5s' }}
        >
          <BirthdayCake />
        </div>
      </div>
    </main>
  );
}
