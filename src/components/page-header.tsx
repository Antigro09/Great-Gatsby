type PageHeaderProps = {
  eyebrow: string;
  title: string;
  intro: string;
};

export function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <header className="mb-10 space-y-4">
      <p className="text-xs uppercase tracking-[0.28em] text-amber-300/90">{eyebrow}</p>
      <h1 className="max-w-3xl text-4xl leading-tight font-semibold text-amber-50 sm:text-5xl">
        {title}
      </h1>
      <p className="max-w-3xl text-base leading-7 text-stone-300 sm:text-lg">{intro}</p>
    </header>
  );
}
