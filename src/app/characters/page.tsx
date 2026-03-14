import { PageHeader } from "@/components/page-header";
import { characters } from "@/lib/site-data";

export default function CharactersPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-10">
      <PageHeader
        eyebrow="Character Analysis"
        title="Who They Are, What They Reveal"
        intro="Each character reflects a different face of desire, class, and consequence. Together they form Fitzgerald's moral map of the Jazz Age."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {characters.map((character) => (
          <article
            key={character.name}
            className="rounded-2xl border border-amber-100/15 bg-black/25 p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-200/35"
          >
            <h2 className="text-2xl font-semibold text-amber-50">{character.name}</h2>
            <p className="mt-4 text-stone-200">
              <span className="font-semibold text-amber-200">Who they are: </span>
              {character.whoTheyAre}
            </p>
            <p className="mt-3 text-stone-200">
              <span className="font-semibold text-amber-200">Role in the plot: </span>
              {character.roleInPlot}
            </p>
            <p className="mt-3 text-stone-200">
              <span className="font-semibold text-amber-200">What they represent: </span>
              {character.represents}
            </p>
            <p className="mt-3 text-stone-200">
              <span className="font-semibold text-amber-200">A key quote: </span>
              {character.keyQuote}
            </p>
            <p className="mt-3 text-stone-200">
              <span className="font-semibold text-amber-200">Theme connection: </span>
              {character.themeConnection}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
