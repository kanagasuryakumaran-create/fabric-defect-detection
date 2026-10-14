export default function UploadZone({
  file,
  onBrowse,
  onDrop,
  onRemove,
  onAnalyze,
  isAnalyzing,
  error,
}) {
  const isReady = !!file;

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    if (event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files[0]) {
      onDrop(event.dataTransfer.files[0]);
    }
  };

  return (
    <div className="space-y-6">
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`rounded-[32px] border-2 border-dashed p-6 transition sm:p-8 ${
          isReady ? 'border-stone-300 bg-stone-50' : 'border-stone-300 bg-white/70 hover:border-stone-400 hover:bg-stone-50'
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-5 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-stone-900 text-2xl text-white shadow-luxe">
            ⤴
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-semibold tracking-tight text-stone-900">
              {file ? 'Image ready for analysis' : 'Drop your fabric image here'}
            </h3>
            <p className="text-sm text-stone-600 sm:text-base">
              JPG, JPEG, and PNG files up to 10MB
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <label className="inline-flex cursor-pointer items-center justify-center rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white shadow-md transition hover:bg-stone-700">
              Browse image
              <input type="file" accept="image/jpeg,image/jpg,image/png" className="hidden" onChange={(e) => onBrowse(e.target.files?.[0])} />
            </label>
            {file && (
              <button
                type="button"
                onClick={onRemove}
                className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:bg-stone-50"
              >
                Remove
              </button>
            )}
          </div>
        </div>
      </div>

      {file && (
        <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-stone-500">Selected file</p>
              <p className="truncate text-base font-semibold text-stone-900">{file.name}</p>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-sm font-medium text-stone-500">Size</p>
              <p className="text-base font-semibold text-stone-900">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <button
        type="button"
        disabled={!file || isAnalyzing}
        onClick={onAnalyze}
        className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-stone-900 to-stone-700 px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:from-stone-800 hover:to-stone-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isAnalyzing ? 'Analyzing...' : 'Analyze Fabric'}
      </button>
    </div>
  );
}
