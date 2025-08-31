"use client";
import { useEffect, useState } from 'react';
import conf from '@/config.json';

function getRemaining() {
  const t = new Date(conf.eventDate).getTime();
  const now = new Date().getTime();
  const diff = t - now;
  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
  const m = Math.floor((diff % (1000*60*60)) / (1000*60));
  const s = Math.floor((diff % (1000*60)) / 1000);
  return { diff, d, h, m, s };
}

export default function Countdown() {
  const [r, setR] = useState(getRemaining());
  useEffect(() => {
    const id = setInterval(() => setR(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);
  if (r.diff <= 0) {
    return <div className="dDay">오늘이에요! 🎉</div>;
  }
  return (
    <div className="dDay">
      D-{r.d} <span className="small">{r.h}h {r.m}m {r.s}s</span>
    </div>
  );
}
