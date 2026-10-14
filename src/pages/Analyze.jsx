import { useState } from 'react';
import { predictFabric } from '../services/api';
import UploadZone from '../components/UploadZone';
import LoadingState from '../components/LoadingState';
import PredictionResult from '../components/PredictionResult';

const MAX_FILE_SIZE = 10 * 1024 * 1024;

const getErrorMessage = (file) => {
  if (!file) {
    return 'Please choose an image before analyzing.';
  }

  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if (!allowedTypes.includes(file.type)) {
    return 'Only JPG, JPEG, and PNG images are allowed.';
  }

  if (file.size > MAX_FILE_SIZE) {
    return 'File is too large. Please select an image under 10MB.';
  }

  return '';
};

export default function Analyze() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [error, setError] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const resetErrors = () => setError('');

  const handleFileSelection = (file) => {
    if (!file) return;

    const validationError = getErrorMessage(file);
    if (validationError) {
      setError(validationError);
      return;
    }

    resetErrors();
    setSelectedFile(file);
    setResult(null);

    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleAnalyze = async () => {
    if (!selectedFile) {
      setError('No image selected. Please upload a fabric image first.');
      return;
    }

    const validationError = getErrorMessage(selectedFile);
    if (validationError) {
      setError(validationError);
      return;
    }

    if (isAnalyzing) return;

    setError('');
    setIsAnalyzing(true);

    try {
      const response = await predictFabric(selectedFile);
      setResult(response);
    } catch (apiError) {
      setError(apiError.message || 'Prediction failed. Please try again.');
      setResult(null);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleRemove = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setSelectedFile(null);
    setPreviewUrl('');
    setError('');
    setResult(null);
  };

  const handleAnalyzeAnother = () => {
    handleRemove();
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">Fabric classification</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-900">Analyze a textile image</h1>
      </div>

      {!result && !isAnalyzing ? (
        <div className="mx-auto max-w-3xl">
          <UploadZone
            file={selectedFile}
            onBrowse={handleFileSelection}
            onDrop={handleFileSelection}
            onRemove={handleRemove}
            onAnalyze={handleAnalyze}
            isAnalyzing={isAnalyzing}
            error={error}
          />
        </div>
      ) : null}

      {isAnalyzing && <LoadingState />}

      {!isAnalyzing && result && (
        <PredictionResult
          image={previewUrl}
          prediction={result.prediction}
          confidence={result.confidence}
          probabilities={result.probabilities || {}}
          onAnalyzeAnother={handleAnalyzeAnother}
        />
      )}
    </div>
  );
}
