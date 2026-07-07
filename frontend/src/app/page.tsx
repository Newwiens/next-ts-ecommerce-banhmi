export default function HomePage() {
  return (
    <main className="min-h-screen bg-orange-50">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
          Ba Mi Vietnam
        </p>

        <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-zinc-950 md:text-7xl">
          Verse Bánh Mì met de smaak van Sài Gòn (TEST)
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700">
          Knapperig brood, frisse rau chua, hartige cha lua, mals vlees en
          Vietnamese streetfood vibes.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/menu"
            className="rounded-full bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Bekijk menu
          </a>

          <a
            href="/bestellen"
            className="rounded-full border border-zinc-300 bg-white px-6 py-3 font-semibold text-zinc-950 transition hover:bg-orange-100"
          >
            Bestellen banh mi
          </a>
        </div>
      </section>
    </main>
  );
}