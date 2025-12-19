"use client";

import { useMemo, useState } from "react";

type Device = "keyboard" | "touch" | "gamepad";
type Style = "aggressive" | "sniper" | "support";

const DEVICE_LABEL: Record<Device, string> = {
  keyboard: "Mouse + Keyboard",
  touch: "Touch",
  gamepad: "Gamepad",
};

const STYLE_LABEL: Record<Style, string> = {
  aggressive: "Aggressive",
  sniper: "Sniper",
  support: "Support",
};

export default function QuickStartQuiz() {
  const [device, setDevice] = useState<Device>("keyboard");
  const [style, setStyle] = useState<Style>("aggressive");

  const tips = useMemo(() => {
    const base = [
      "Warm up for 2 minutes: tracking + flicks + a short match.",
      "Use cover on every reload — never reload in the open.",
      "If you lose two fights in a row, slow down and reset your angles.",
    ];

    const deviceTips: Record<Device, string[]> = {
      keyboard: [
        "Lower your sensitivity until your tracking is steady.",
        "Pre-aim corners at head height before peeking.",
      ],
      touch: [
        "Use a consistent thumb zone and keep your crosshair centered.",
        "Favor close-range fights and avoid wide-open lanes.",
      ],
      gamepad: [
        "Use shorter stick movements for micro-adjustments.",
        "Take fights at mid-range where aim assist is most consistent.",
      ],
    };

    const styleTips: Record<Style, string[]> = {
      aggressive: [
        "Commit with a plan: entry → burst → reposition.",
        "After a kill, move. Don’t re-peek the same angle twice.",
      ],
      sniper: [
        "Hold calm angles and let enemies walk into your crosshair.",
        "Reposition after every shot to avoid easy trades.",
      ],
      support: [
        "Play near teammates and trade fights instead of solo duels.",
        "Control space: deny lanes and keep enemies predictable.",
      ],
    };

    return [...deviceTips[device], ...styleTips[style], ...base].slice(0, 6);
  }, [device, style]);

  return (
    <section className="card-glass rounded-3xl p-6 sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-glow text-2xl font-black tracking-tight text-white sm:text-3xl">
            Quick Start (30 seconds)
          </h2>
          <p className="mt-2 text-sm leading-6 text-white/65">
            Pick your setup and playstyle. Get a short plan that helps you win
            faster — and stay in matches longer.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/50">
                Device
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {(Object.keys(DEVICE_LABEL) as Device[]).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setDevice(key)}
                    className={[
                      "rounded-full border px-3 py-1.5 text-xs font-bold",
                      key === device
                        ? "border-cyan-300/30 bg-cyan-400/15 text-cyan-100"
                        : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white",
                    ].join(" ")}
                  >
                    {DEVICE_LABEL[key]}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/50">
                Playstyle
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {(Object.keys(STYLE_LABEL) as Style[]).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setStyle(key)}
                    className={[
                      "rounded-full border px-3 py-1.5 text-xs font-bold",
                      key === style
                        ? "border-cyan-300/30 bg-cyan-400/15 text-cyan-100"
                        : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white",
                    ].join(" ")}
                  >
                    {STYLE_LABEL[key]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-xl">
          <div className="text-xs font-bold uppercase tracking-widest text-white/50">
            Your plan
          </div>
          <ol className="mt-3 grid gap-3">
            {tips.map((tip, idx) => (
              <li
                key={tip}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-white/75"
              >
                <span className="mr-2 text-cyan-200/90">{idx + 1}.</span>
                {tip}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

