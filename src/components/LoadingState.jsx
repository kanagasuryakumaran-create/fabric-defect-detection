export default function LoadingState() {
  return (
    <div className="flex min-h-[420px] flex-col items-center justify-center rounded-[30px] border border-stone-200 bg-white p-8 text-center shadow-luxe">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-4 border-stone-200 border-t-stone-900 animate-spin">
        <div className="h-8 w-8 rounded-full bg-stone-100" />
      </div>
      <h3 className="text-2xl font-semibold tracking-tight text-stone-900">Analyzing fabric...</h3>
      <p className="mt-3 max-w-md text-sm text-stone-600 sm:text-base">
        Our AI model is classifying your image and measuring confidence across fabric types.
      </p>
    </div>
  );
}
