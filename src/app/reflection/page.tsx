import { PageHeader } from "@/components/page-header";
import { reflection } from "@/lib/site-data";

export default function ReflectionPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 lg:px-10">
      <PageHeader
        eyebrow="Final Reflection"
        title="Why This Website Represents The Novel"
        intro="This section explains the argument behind the project and why its structure mirrors Fitzgerald's message."
      />

      <div className="space-y-5 rounded-3xl border border-amber-100/20 bg-[linear-gradient(145deg,rgba(14,37,42,0.88),rgba(15,18,24,0.9))] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.45)] sm:p-8">
        {reflection.map((paragraph) => (
          <p key={paragraph} className="text-base leading-8 text-stone-200 sm:text-lg">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
