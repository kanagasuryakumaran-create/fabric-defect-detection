export default function ProbabilityChart({ probabilities = {} }) {
  const entries = Object.entries(probabilities);

  if (!entries.length) {
    return null;
  }

  const maxValue = Math.max(...entries.map(([, value]) => Number(value) || 0), 1);

  return (
    <div className="space-y-4">
      {entries.map(([label, value]) => {
        const numericValue = Number(value) || 0;
        const percentage = Math.min((numericValue / maxValue) * 100, 100);

        return (
          <div key={label} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-stone-700 capitalize">{label.replace(/_/g, ' ')}</span>
              <span className="font-semibold text-stone-900">{numericValue.toFixed(2)}%</span>
            </div>
            <div className="h-2.5 rounded-full bg-stone-200">
              <div
                className="h-2.5 rounded-full bg-stone-900 transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
