import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { ReactNode } from 'react';

interface TermsAndConditionsModalProps {
  onClose: () => void;
  children?: ReactNode;
}

export default function TermsAndConditionsModal({
  onClose,
  children,
}: TermsAndConditionsModalProps) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-2xl flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 rounded-full text-gray-500 transition hover:text-gray-800"
        >
          <HighlightOffIcon className="w-6 h-6" />
        </button>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center">
          Termos e Condições
        </h2>

        <div className="text-gray-600 text-sm sm:text-base leading-relaxed max-h-[70vh] overflow-y-auto px-4">
          {children}
        </div>
      </div>
    </div>
  );
}
