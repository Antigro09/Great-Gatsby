import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { homeIntro, timeline } from "@/lib/site-data";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-10">
      <PageHeader
        eyebrow="Home"
        title={`${homeIntro.title} by ${homeIntro.author}`}
        intro={homeIntro.summary}
      />

      <section className="gold-frame fade-up rounded-3xl p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.28em] text-amber-300/90">Welcome</p>
        <p className="mt-4 max-w-4xl text-base leading-8 text-stone-200 sm:text-lg">{homeIntro.purpose}</p>
        <p className="mt-4 max-w-4xl text-base leading-8 text-stone-300 sm:text-lg">
          <span className="font-semibold text-amber-200">Setting: </span>
          {homeIntro.setting}
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/characters"
            className="rounded-full border border-amber-100/40 bg-amber-100/10 px-4 py-2 text-sm text-amber-100 transition hover:bg-amber-100/20"
          >
            Explore Characters
          </Link>
          <Link
            href="/themes"
            className="rounded-full border border-teal-200/40 bg-teal-200/10 px-4 py-2 text-sm text-teal-100 transition hover:bg-teal-200/20"
          >
            Explore Themes
          </Link>
          <Link
            href="/quotes"
            className="rounded-full border border-stone-200/30 px-4 py-2 text-sm text-stone-200 transition hover:bg-stone-200/10"
          >
            Explore Quotes
          </Link>
        </div>
      </section>

      <section className="stagger mt-8 grid gap-5 md:grid-cols-2">
        <article className="rounded-2xl border border-amber-100/20 bg-black/20 p-6">
          <p className="text-xs uppercase tracking-[0.25em] text-amber-300/90">Timeline</p>
          <h2 className="mt-3 text-3xl font-semibold text-amber-50">From Arrival To Disillusionment</h2>
          <ol className="mt-5 space-y-4">
            {timeline.map((item) => (
              <li key={item.event} className="border-l border-amber-200/30 pl-4">
                <p className="font-semibold text-amber-100">{item.event}</p>
                <p className="mt-1 text-sm leading-6 text-stone-300">{item.detail}</p>
              </li>
            ))}
          </ol>
        </article>

        <article className="rounded-2xl border border-amber-100/20 bg-black/20 p-6">
          <p className="text-xs uppercase tracking-[0.25em] text-amber-300/90">Invitation</p>
          <h2 className="mt-3 text-3xl font-semibold text-amber-50">An Invitation To Gatsby's Lawn</h2>
          <div className="mt-5 rounded-2xl border border-amber-200/20 bg-[linear-gradient(140deg,rgba(210,177,109,0.14),rgba(8,20,26,0.66))] p-5">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-200/90">Saturday Night, West Egg</p>
            <p className="mt-3 text-2xl text-amber-50">You are cordially invited</p>
            <p className="mt-3 leading-7 text-stone-200">
              Come for orchestras, rumors, and glittering chandeliers. Stay long enough to notice what
              the champagne cannot hide.
            </p>
            <p className="mt-4 text-sm text-stone-300">Dress code: white linen, gold accents, and careful smiles.</p>
          </div>
          <p className="mt-5 text-stone-300">
            The invitation format mirrors Fitzgerald's style: spectacle first, moral cost second.
          </p>
        </article>
      </section>
    </div>
  );
}
