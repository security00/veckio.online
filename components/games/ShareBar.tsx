"use client";

import { useMemo, useState } from "react";

type Props = {
  title: string;
  url: string;
};

export default function ShareBar({ title, url }: Props) {
  const [copied, setCopied] = useState(false);

  const shareLinks = useMemo(() => {
    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(`Play ${title} — ${url}`);
    return [
      {
        label: "X",
        href: `https://twitter.com/intent/tweet?text=${encodedText}`,
      },
      {
        label: "Reddit",
        href: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedText}`,
      },
    ];
  }, [title, url]);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  }

  return (
    <div className="card-glass flex flex-col gap-3 rounded-2xl px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="text-sm font-semibold text-white/80">
        Share this page
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={copyLink}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-white/80 hover:bg-white/10 hover:text-white"
        >
          {copied ? "Copied!" : "Copy link"}
        </button>
        {shareLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="neon-ring rounded-full bg-white/5 px-4 py-2 text-xs font-bold text-cyan-100 hover:bg-white/10"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

