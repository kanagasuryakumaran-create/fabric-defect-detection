export default function ImagePreview({ src, alt = 'Uploaded fabric preview', className = '' }) {
  if (!src) {
    return null;
  }

  return (
    <div className={`overflow-hidden rounded-3xl border border-stone-200 bg-stone-100 ${className}`}>
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}
