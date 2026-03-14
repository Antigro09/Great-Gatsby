"use client";

import { useMemo, useState } from "react";
import { quotes } from "@/lib/site-data";

export function QuoteSpotlight() {
  const [index, setIndex] = useState(0);

  const quote = useMemo(() => quotes[index], [index]);

  const goNext = () => setIndex((prev) => (prev + 1) % quotes.length);
  const goPrev = () => setIndex((prev) => (prev - 1 + quotes.length) % quotes.length);

  return (
    <section className="rounded-3xl border border-amber-100/20 bg-black/25 p-6 backdrop-blur-sm sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs uppercase tracking-[0.25em] text-amber-300/80">Quote Spotlight</p>
        <p className="text-sm text-stone-400">
          {index + 1} / {quotes.length}
        </p>
      </div>

      <blockquote className="mt-5 text-xl leading-relaxed text-amber-50 sm:text-2xl">
        {quote.text}
      </blockquote>

      <p className="mt-4 text-sm uppercase tracking-[0.16em] text-amber-200/80">
        {quote.speaker} - {quote.chapter}
      </p>

      <p className="mt-4 text-stone-300">{quote.analysis}</p>

      <div className="mt-6 flex gap-3">
        <button
          onClick={goPrev}
          className="rounded-full border border-amber-100/30 px-4 py-2 text-sm text-amber-100 transition hover:bg-amber-100/10"
        >
          Previous
        </button>
        <button
          onClick={goNext}
          className="rounded-full border border-amber-100/30 px-4 py-2 text-sm text-amber-100 transition hover:bg-amber-100/10"
        >
          Next
        </button>
      </div>
    </section>
  );
}
