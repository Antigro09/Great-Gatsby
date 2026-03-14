import { PageHeader } from "@/components/page-header";
import { QuoteSpotlight } from "@/components/quote-spotlight";
import { quotes } from "@/lib/site-data";

export default function QuotesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-10">
      <PageHeader
        eyebrow="Quote Gallery"
        title="Voices That Define the Novel"
        intro="Each quotation below includes context and analysis so the text itself drives interpretation, not just summary."
      />

      <QuoteSpotlight />

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {quotes.map((quote) => (
          <article key={quote.text} className="rounded-2xl border border-amber-100/15 bg-black/25 p-6">
            <blockquote className="text-lg leading-relaxed text-amber-50">{quote.text}</blockquote>
            <p className="mt-4 text-xs uppercase tracking-[0.15em] text-amber-200/85">
              {quote.speaker} - {quote.chapter}
            </p>
            <p className="mt-3 text-stone-200">{quote.analysis}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
