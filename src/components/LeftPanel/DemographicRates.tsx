interface DemographicRatesProps {
  selected: string | null;
  onSelect: (rate: string) => void;
}

const DEMOGRAPHIC_RATES = [
  'Mortality Rate',
  'Remarriage Rate',
  'Divorce Rate',
  'Marriage Rate',
  'Polygamous Rate',
  'Infertility Rate',
];

export const DemographicRates = ({ selected, onSelect }: DemographicRatesProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {DEMOGRAPHIC_RATES.map((rate) => (
        <button
          key={rate}
          onClick={() => onSelect(rate)}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${selected === rate
              ? 'bg-[#2d2d2d] text-white shadow-sm'
              : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
        >
          {rate}
        </button>
      ))}
    </div>
  );
};

