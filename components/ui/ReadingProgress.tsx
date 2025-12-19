"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (height <= 0) {
        setProgress(0);
        return;
      }
      setProgress(Math.min(1, Math.max(0, scrollTop / height)));
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[60] h-0.5 w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500"
        style={{ width: `${Math.round(progress * 100)}%` }}
      />
    </div>
  );
}

