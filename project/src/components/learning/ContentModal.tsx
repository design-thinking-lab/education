import React from 'react';
import { X } from 'lucide-react';

interface ContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function ContentModal({ isOpen, onClose, children }: ContentModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-auto">
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}