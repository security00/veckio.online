"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const DEFAULT_ALLOW =
  "accelerometer; gyroscope; autoplay; payment; fullscreen; microphone; clipboard-read; clipboard-write";
const DEFAULT_SANDBOX =
  "allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts allow-same-origin allow-downloads allow-popups-to-escape-sandbox";

type Props = {
  title: string;
  src: string;
  startMode?: "click" | "auto";
  allow?: string;
  sandbox?: string;
  className?: string;
};

export default function GameFrame({
  title,
  src,
  startMode = "click",
  allow = DEFAULT_ALLOW,
  sandbox = DEFAULT_SANDBOX,
  className,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(startMode === "auto");
  const [loading, setLoading] = useState(startMode === "auto");
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    function onFullscreenChange() {
      const element = containerRef.current;
      setIsFullscreen(!!element && document.fullscreenElement === element);
    }

    onFullscreenChange();
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  const displaySrc = useMemo(() => {
    if (!started) return undefined;
    return src;
  }, [src, started]);

  async function toggleFullscreen() {
    const element = containerRef.current;
    if (!element) return;

    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
        return;
      }
      await element.requestFullscreen();
    } catch {
      // Ignore (browser may block fullscreen without user gesture).
    }
  }

  const fullscreenLabel = isFullscreen ? "Exit fullscreen" : "Enter fullscreen";

  return (
    <section
      ref={containerRef}
      className={[
        "relative overflow-hidden bg-black/40",
        isFullscreen ? "h-full w-full border-0 rounded-none" : "rounded-3xl border border-white/10",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <h2 className="sr-only">{title}</h2>
      <h3 className="sr-only">Embedded game player</h3>
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70">
          Browser game
        </span>
        <span className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70 sm:inline-flex">
          Secure iframe sandbox
        </span>
      </div>

      <div className="absolute right-4 top-4 z-10 flex items-center gap-2">
        <button
          type="button"
          onClick={toggleFullscreen}
          aria-label={fullscreenLabel}
          title={fullscreenLabel}
          className="neon-ring inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-cyan-100 hover:bg-white/10"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M9 3H3V9M15 3H21V9M9 21H3V15M15 21H21V15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className={isFullscreen ? "relative h-full" : "relative"}>
        <div
          className={
            isFullscreen
              ? "h-full w-full bg-black"
              : "aspect-video min-h-[360px] w-full bg-black/50 sm:min-h-[460px]"
          }
        >
          {!started ? (
            <div className="grid h-full w-full place-items-center p-6">
              <div className="max-w-md text-center">
                <h3 className="text-glow text-xl font-black text-white">
                  Ready to play?
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Click to load the game.
                </p>
                <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => {
                      setStarted(true);
                      setLoading(true);
                    }}
                    className="neon-ring inline-flex items-center justify-center rounded-full bg-cyan-400/15 px-5 py-2 text-sm font-black text-cyan-100 hover:bg-cyan-400/20"
                  >
                    Load game
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <iframe
                key={displaySrc}
                title={title}
                src={displaySrc}
                allow={allow}
                sandbox={sandbox}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
                onLoad={() => setLoading(false)}
              />
              {loading ? (
                <div className="absolute inset-0 grid place-items-center bg-black/40">
                  <div className="card-glass flex items-center gap-3 rounded-2xl px-4 py-3">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-cyan-200/40 border-t-cyan-200" />
                    <span className="text-sm font-semibold text-white/80">
                      Loading…
                    </span>
                  </div>
                </div>
              ) : null}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
