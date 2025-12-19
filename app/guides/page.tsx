import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgress from "@/components/ui/ReadingProgress";
import QuickStartQuiz from "@/components/home/QuickStartQuiz";
import { SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Fast, skimmable Veck.io guides: how to play, movement and aim tips, map fundamentals, weapons overview, and a practical FAQ.",
  alternates: {
    canonical: `${SITE_ORIGIN}/guides`,
  },
};

const SECTIONS = [
  { id: "how-to-play", title: "How to Play" },
  { id: "tips", title: "Tips & Tricks" },
  { id: "maps", title: "Map Guide" },
  { id: "weapons", title: "Weapons" },
  { id: "faq", title: "FAQ" },
];

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-10 sm:px-6">
      <ReadingProgress />

      <div className="grid gap-10 lg:grid-cols-[0.32fr_0.68fr] lg:items-start">
        <aside className="card-glass h-fit rounded-3xl p-6 lg:sticky lg:top-24">
          <div className="text-xs font-bold uppercase tracking-widest text-white/50">
            On this page
          </div>
          <nav className="mt-3 flex flex-col gap-1">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-xl px-3 py-2 text-sm font-semibold text-white/70 hover:bg-white/5 hover:text-white"
              >
                {s.title}
              </a>
            ))}
          </nav>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm font-black text-white">Best way to use this</div>
            <ol className="mt-2 grid gap-2 text-sm leading-6 text-white/70">
              <li>1) Start a match.</li>
              <li>2) Read one section.</li>
              <li>3) Apply one idea for 3 rounds.</li>
            </ol>
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <Link
              href="/play/veck-io"
              className="neon-ring rounded-2xl bg-cyan-400/15 px-4 py-3 text-center text-sm font-black text-cyan-100 hover:bg-cyan-400/20"
            >
              Play Veck.io
            </Link>
            <Link
              href="/games"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-bold text-white/80 hover:bg-white/10 hover:text-white"
            >
              Browse games
            </Link>
          </div>
        </aside>

        <main className="space-y-10">
          <header className="card-glass rounded-3xl p-6 sm:p-8">
            <h1 className="text-glow text-3xl font-black tracking-tight text-white sm:text-4xl">
              Guides
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">
              Skimmable, practical guides designed for overseas players: less
              theory, more wins. Read one section, apply one habit, and keep
              playing.
            </p>
          </header>

          <QuickStartQuiz />

          <section id="how-to-play" className="card-glass scroll-mt-28 rounded-3xl p-6 sm:p-8">
            <h2 className="text-glow text-2xl font-black text-white sm:text-3xl">
              How to Play Veck.io
            </h2>
            <p className="mt-2 text-sm leading-6 text-white/65">
              The fastest path is simple: stable aim, clean peeks, and constant
              repositioning.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-white/50">
                  Core loop
                </h3>
                <ul className="mt-3 grid gap-2 text-sm leading-6 text-white/75">
                  <li>• Spawn → take cover → find an angle.</li>
                  <li>• Burst damage → break line of sight.</li>
                  <li>• After a kill, rotate (don’t re-peek).</li>
                  <li>• Reload behind cover only.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-white/50">
                  Controls (typical)
                </h3>
                <ul className="mt-3 grid gap-2 text-sm leading-6 text-white/75">
                  <li>• WASD: move</li>
                  <li>• Mouse: aim</li>
                  <li>• Left-click: shoot</li>
                  <li>• Space: jump</li>
                  <li>• Shift: sprint (if supported)</li>
                </ul>
              </div>
            </div>

            <p className="mt-5 text-sm leading-6 text-white/60">
              Want a distraction-free page? Use{" "}
              <Link className="text-cyan-200 hover:text-cyan-100" href="/play/veck-io">
                Play Veck.io
              </Link>{" "}
              for a bigger player and related games.
            </p>
          </section>

          <section id="tips" className="card-glass scroll-mt-28 rounded-3xl p-6 sm:p-8">
            <h2 className="text-glow text-2xl font-black text-white sm:text-3xl">
              Tips & Tricks (that actually work)
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Peek small, win big",
                  text: "Expose as little as possible. You only need one clean burst to win a duel.",
                },
                {
                  title: "Crosshair discipline",
                  text: "Keep your crosshair where the next enemy will appear — usually head height at the corner.",
                },
                {
                  title: "Reposition after kills",
                  text: "The second player will pre-aim your last angle. Move immediately after a frag.",
                },
                {
                  title: "Simplify fights",
                  text: "If you’re missing shots, slow down your clicks. Accuracy scales faster than speed.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="text-sm font-black text-white">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">{card.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/50">
                2-minute warmup
              </h3>
              <ol className="mt-3 grid gap-2 text-sm leading-6 text-white/75">
                <li>1) Tracking: follow a moving target smoothly.</li>
                <li>2) Flicks: snap to a target, stop, then shoot.</li>
                <li>3) One match: focus on peeks + repositioning only.</li>
              </ol>
            </div>
          </section>

          <section id="maps" className="card-glass scroll-mt-28 rounded-3xl p-6 sm:p-8">
            <h2 className="text-glow text-2xl font-black text-white sm:text-3xl">
              Map Guide (fundamentals)
            </h2>
            <p className="mt-2 text-sm leading-6 text-white/65">
              You don’t need to memorize every map. Learn these repeatable rules
              and you’ll feel “at home” faster.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-sm font-black text-white">
                  The three zones
                </h3>
                <ul className="mt-2 grid gap-2 text-sm leading-6 text-white/70">
                  <li>• Safe zone: reload/heal behind cover.</li>
                  <li>• Fight zone: take short peeks and trade damage.</li>
                  <li>• Danger zone: open lanes — cross only with intent.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-sm font-black text-white">
                  Rotations
                </h3>
                <ul className="mt-2 grid gap-2 text-sm leading-6 text-white/70">
                  <li>• After a kill: rotate 1 cover piece away.</li>
                  <li>• When weak: break line-of-sight first.</li>
                  <li>• Avoid re-peeking the same corner twice.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="weapons" className="card-glass scroll-mt-28 rounded-3xl p-6 sm:p-8">
            <h2 className="text-glow text-2xl font-black text-white sm:text-3xl">
              Weapons (simple framework)
            </h2>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Instead of “best weapon”, pick the right weapon for the range and
              your consistency.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Close range",
                  text: "Take tight angles, play corners, chase short fights.",
                },
                {
                  title: "Mid range",
                  text: "Most consistent. Burst fire + cover wins the most duels.",
                },
                {
                  title: "Long range",
                  text: "Only commit when you can hold an angle and disengage safely.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="text-sm font-black text-white">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">{card.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-5">
              <h3 className="text-sm font-black text-white">
                A safe default: burst discipline
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                If recoil or spread hurts your accuracy, treat every weapon like
                a burst weapon: shoot 3–6 rounds, reset, repeat.
              </p>
            </div>
          </section>

          <section id="faq" className="card-glass scroll-mt-28 rounded-3xl p-6 sm:p-8">
            <h2 className="text-glow text-2xl font-black text-white sm:text-3xl">
              FAQ
            </h2>
            <div className="mt-5 grid gap-3">
              {[
                {
                  q: "Is this the official Veck.io website?",
                  a: "No. This is a fan-made hub with an embedded player and guides. For the official site, use the “Official site” button on the play page.",
                },
                {
                  q: "Why doesn’t a game load inside the page?",
                  a: "Some providers block iframe embedding for security or policy reasons. If that happens, use the Official site button on the play page.",
                },
                {
                  q: "How do I improve fast?",
                  a: "Pick one habit per session: (1) crosshair at head height, (2) peek small, (3) reposition after kills. Track one improvement for 10 matches.",
                },
                {
                  q: "What’s the best sensitivity?",
                  a: "The best sensitivity is the one that makes your tracking stable. Start lower than you think, then adjust up only if you can keep control.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <summary className="cursor-pointer text-sm font-black text-white">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-white/65">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
