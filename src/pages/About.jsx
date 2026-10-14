export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-luxe sm:p-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">About FabricAI</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900">Textile intelligence for modern fabric workflows.</h1>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-stone-50 p-5">
            <p className="text-2xl font-semibold text-stone-900">Fast</p>
            <p className="mt-2 text-sm leading-7 text-stone-600">
              Real-time image analysis and rapid classification feedback for fabric review workflows.
            </p>
          </div>
          <div className="rounded-2xl bg-stone-50 p-5">
            <p className="text-2xl font-semibold text-stone-900">Accurate</p>
            <p className="mt-2 text-sm leading-7 text-stone-600">
              Built to assess visually distinctive fabric materials with confidence-based predictions.
            </p>
          </div>
          <div className="rounded-2xl bg-stone-50 p-5">
            <p className="text-2xl font-semibold text-stone-900">Flexible</p>
            <p className="mt-2 text-sm leading-7 text-stone-600">
              The frontend API layer is isolated for easy adaptation to a backend service when deployed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
