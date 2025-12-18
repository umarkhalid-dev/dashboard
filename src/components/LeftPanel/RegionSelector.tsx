interface RegionSelectorProps {
  selected: string[];
  onChange: (regions: string[]) => void;
}

const REGIONS = ['Select All', 'Abu Dhabi South Mainland'];

export const RegionSelector = ({ selected, onChange }: RegionSelectorProps) => {
  const handleToggle = (region: string) => {
    if (region === 'Select All') {
      if (selected.length === REGIONS.length - 1) {
        onChange([]);
      } else {
        onChange(REGIONS.filter(r => r !== 'Select All'));
      }
    } else {
      if (selected.includes(region)) {
        onChange(selected.filter(r => r !== region));
      } else {
        onChange([...selected, region]);
      }
    }
  };

  const isAllSelected = selected.length === REGIONS.length - 1;

  return (
    <div>
      <h3 className="text-xs font-semibold text-gray-700 mb-3">Select Region</h3>
      <div className="flex flex-wrap gap-2">
        {REGIONS.map((region) => {
          const isSelected = region === 'Select All'
            ? isAllSelected
            : selected.includes(region);

          return (
            <button
              key={region}
              onClick={() => handleToggle(region)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${isSelected
                  ? 'bg-[#2d2d2d] text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
              {region}
            </button>
          );
        })}
      </div>
    </div>
  );
};

