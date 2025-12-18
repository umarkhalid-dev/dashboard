interface MunicipalitySelectorProps {
  selected: string[];
  onChange: (municipalities: string[]) => void;
}

const MUNICIPALITIES = ['Select All', 'Abu Dhabi', 'Al-Ain', 'Al Dhafra'];

export const MunicipalitySelector = ({ selected, onChange }: MunicipalitySelectorProps) => {
  const handleToggle = (municipality: string) => {
    if (municipality === 'Select All') {
      if (selected.length === MUNICIPALITIES.length - 1) {
        onChange([]);
      } else {
        onChange(MUNICIPALITIES.filter(m => m !== 'Select All'));
      }
    } else {
      if (selected.includes(municipality)) {
        onChange(selected.filter(m => m !== municipality));
      } else {
        onChange([...selected, municipality]);
      }
    }
  };

  const isAllSelected = selected.length === MUNICIPALITIES.length - 1;

  return (
    <div>
      <h3 className="text-xs font-semibold text-gray-700 mb-3">Select Municipality</h3>
      <div className="flex flex-wrap gap-2">
        {MUNICIPALITIES.map((municipality) => {
          const isSelected = municipality === 'Select All'
            ? isAllSelected
            : selected.includes(municipality);

          return (
            <button
              key={municipality}
              onClick={() => handleToggle(municipality)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${isSelected
                  ? 'bg-[#2d2d2d] text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
              {municipality}
            </button>
          );
        })}
      </div>
    </div>
  );
};

