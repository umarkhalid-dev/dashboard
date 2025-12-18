interface MultiSelectGroupProps {
  title?: string;
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

export const MultiSelectGroup = ({ title, options, selected, onChange }: MultiSelectGroupProps) => {
  const handleToggle = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter(item => item !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4">
      {title && <h3 className="text-xs font-semibold text-gray-700 mb-3">{title}</h3>}
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleToggle(option)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${selected.includes(option)
                ? 'bg-[#2d2d2d] text-white shadow-sm'
                : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

