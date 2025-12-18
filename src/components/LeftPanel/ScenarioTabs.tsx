interface ScenarioTabsProps {
  activeTab: 'core' | 'loan';
  onTabChange: (tab: 'core' | 'loan') => void;
}

export const ScenarioTabs = ({ activeTab, onTabChange }: ScenarioTabsProps) => {
  return (
    <div className="flex gap-2 bg-gray-100 rounded-xl p-1">
      <button
        onClick={() => onTabChange('core')}
        className={`flex-1 px-5 py-2.5 rounded-xl text-xs font-medium transition-all ${activeTab === 'core'
          ? 'bg-[#3d3d3d] text-white'
          : 'bg-[#f5f5f5] text-gray-600 hover:bg-gray-200'
          }`}
      >
        Core Services
      </button>
      <button
        onClick={() => onTabChange('loan')}
        className={`flex-1 px-5 py-2.5 rounded-xl text-xs font-medium transition-all ${activeTab === 'loan'
          ? 'bg-[#3d3d3d] text-white'
          : 'bg-[#f5f5f5] text-gray-600 hover:bg-gray-200'
          }`}
      >
        Loan Services
      </button>
    </div>
  );
};

