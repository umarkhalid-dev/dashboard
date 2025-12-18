import { useState } from 'react';

interface CollapsibleSectionProps {
  title: string;
  children?: React.ReactNode;
}

export const CollapsibleSection = ({ title, children }: CollapsibleSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-gray-200 rounded-md">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-sm font-semibold text-gray-700">{title}</span>
        <span className="text-gray-500">{isExpanded ? '−' : '+'}</span>
      </button>
      {isExpanded && children && (
        <div className="px-4 py-3 border-t border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
};

