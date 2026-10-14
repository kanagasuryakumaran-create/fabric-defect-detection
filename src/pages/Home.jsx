import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/80 px-3 py-2 text-sm font-medium text-stone-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            AI-powered fabric intelligence
          </div>

          <div className="space-y-5">
            <h1 className="max-w-xl text-balance text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
              AI-Powered Fabric Classification
            </h1>
            <p className="max-w-lg text-lg leading-8 text-stone-600">
              Upload textile imagery and receive instant classification insights from a deep learning model built for fabric recognition.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/analyze"
              className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3.5 text-base font-medium text-white shadow-lg transition hover:bg-stone-700"
            >
              Analyze Fabric
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3.5 text-base font-medium text-stone-700 transition hover:border-stone-400 hover:bg-stone-50"
            >
              Learn more
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="fabric-pattern absolute inset-0 rounded-[32px] opacity-80" />
          <div className="floaty relative overflow-hidden rounded-[32px] border border-stone-200 bg-white p-6 shadow-luxe">
            <div className="space-y-6">
              <div className="rounded-[28px] bg-stone-100 p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-gradient-to-br from-stone-700 to-stone-500 p-4 text-white">
                    <p className="text-xs uppercase tracking-[0.2em] text-stone-200">Model</p>
                    <p className="mt-3 text-2xl font-semibold">DNN</p>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-stone-200">
                    <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Status</p>
                    <p className="mt-3 text-2xl font-semibold text-stone-900">Live</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-dashed border-stone-300 bg-stone-50 p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl shadow-sm ring-1 ring-stone-200">
                    🧵
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Fabric scan</p>
                    <p className="text-xl font-semibold text-stone-900">Cotton blend</p>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  {[82, 71, 58].map((value, index) => (
                    <div key={value} className="space-y-2">
                      <div className="flex items-center justify-between text-sm text-stone-600">
                        <span>Class {index + 1}</span>
                        <span>{value}%</span>
                      </div>
                      <div className="h-2.5 rounded-full bg-stone-200">
                        <div className="h-2.5 rounded-full bg-stone-900" style={{ width: `${value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
