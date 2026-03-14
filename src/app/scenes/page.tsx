import { PageHeader } from "@/components/page-header";
import { scenes } from "@/lib/site-data";

export default function ScenesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-10">
      <PageHeader
        eyebrow="Important Scenes"
        title="Turning Points That Shape Meaning"
        intro="These scenes define the emotional arc of the novel and expose its deepest themes through direct conflict and consequence."
      />

      <div className="space-y-5">
        {scenes.map((scene) => (
          <article key={scene.title} className="rounded-2xl border border-amber-100/15 bg-black/25 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-amber-50">{scene.title}</h2>
            <p className="mt-4 text-stone-200">
              <span className="font-semibold text-amber-200">Summary: </span>
              {scene.summary}
            </p>
            <p className="mt-3 text-stone-200">
              <span className="font-semibold text-amber-200">Why it matters: </span>
              {scene.whyItMatters}
            </p>
            <p className="mt-3 text-stone-200">
              <span className="font-semibold text-amber-200">Themes and symbols: </span>
              {scene.themesAndSymbols}
            </p>
            <p className="mt-3 text-stone-200">
              <span className="font-semibold text-amber-200">What it reveals about characters: </span>
              {scene.characterReveals}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
