import ImagePreview from './ImagePreview';
import ProbabilityChart from './ProbabilityChart';

export default function PredictionResult({ image, prediction, confidence, probabilities, onAnalyzeAnother }) {
  const confidenceValue = Number(confidence) || 0;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_1.35fr]">
      <div className="space-y-4">
        <div className="rounded-[28px] border border-stone-200 bg-white p-4 shadow-luxe">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.14em] text-stone-500">Uploaded image</p>
          <ImagePreview src={image} alt="Fabric classification result" className="h-[340px] w-full" />
        </div>
      </div>

      <div className="space-y-6 rounded-[28px] border border-stone-200 bg-white p-6 shadow-luxe sm:p-7">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-stone-500">Prediction</p>
            <h3 className="mt-2 text-3xl font-semibold tracking-tight text-stone-900">{prediction}</h3>
          </div>
          <button
            type="button"
            onClick={onAnalyzeAnother}
            className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:bg-stone-50"
          >
            Analyze Another Image
          </button>
        </div>

        <div className="rounded-2xl bg-stone-50 p-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-stone-500">Confidence level</p>
              <p className="mt-2 text-4xl font-bold tracking-tight text-stone-900">{confidenceValue.toFixed(2)}%</p>
            </div>

            <div className="relative flex h-24 w-24 items-center justify-center">
              <svg className="h-24 w-24 -rotate-90 transform" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="38" stroke="#e7e5e4" strokeWidth="10" fill="none" />
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  stroke="#1c1917"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray={238.76}
                  strokeDashoffset={238.76 - (238.76 * confidenceValue) / 100}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-stone-700">
                {confidenceValue.toFixed(0)}%
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.14em] text-stone-500">Probability breakdown</p>
            <ProbabilityChart probabilities={probabilities} />
          </div>
        </div>
      </div>
    </div>
  );
}
