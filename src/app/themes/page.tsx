import { PageHeader } from "@/components/page-header";
import { themes } from "@/lib/site-data";

export default function ThemesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-10">
      <PageHeader
        eyebrow="Major Themes"
        title="Ideas That Drive The Novel"
        intro="These themes connect the novel's characters and turning points, revealing Fitzgerald's critique of ambition, status, and moral drift."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {themes.map((theme) => (
          <article key={theme.title} className="rounded-2xl border border-amber-100/15 bg-black/25 p-6">
            <h2 className="text-2xl font-semibold text-amber-50">{theme.title}</h2>
            <p className="mt-4 text-stone-200">
              <span className="font-semibold text-amber-200">Explanation: </span>
              {theme.explanation}
            </p>
            <p className="mt-3 text-stone-200">
              <span className="font-semibold text-amber-200">Connections to characters and scenes: </span>
              {theme.examples}
            </p>
            <p className="mt-3 text-stone-200">
              <span className="font-semibold text-amber-200">Example or quote focus: </span>
              {theme.quoteOrMoment}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
