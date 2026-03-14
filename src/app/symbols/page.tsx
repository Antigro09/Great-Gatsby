import { PageHeader } from "@/components/page-header";
import { symbols } from "@/lib/site-data";

export default function SymbolsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-10">
      <PageHeader
        eyebrow="Symbolism"
        title="Objects That Carry Meaning"
        intro="In Gatsby, symbols are never decoration alone. They reveal longing, class tension, and the moral distance between appearance and truth."
      />

      <div className="space-y-5">
        {symbols.map((symbol) => (
          <article key={symbol.name} className="rounded-2xl border border-amber-100/15 bg-black/25 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-amber-50">{symbol.name}</h2>
            <p className="mt-4 text-stone-200">
              <span className="font-semibold text-amber-200">What it literally is: </span>
              {symbol.literal}
            </p>
            <p className="mt-3 text-stone-200">
              <span className="font-semibold text-amber-200">What it represents: </span>
              {symbol.meaning}
            </p>
            <p className="mt-3 text-stone-200">
              <span className="font-semibold text-amber-200">How Fitzgerald develops themes: </span>
              {symbol.themeDevelopment}
            </p>
            <p className="mt-3 text-stone-200">
              <span className="font-semibold text-amber-200">One quote: </span>
              {symbol.quote}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
