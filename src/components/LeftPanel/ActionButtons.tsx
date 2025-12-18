export const ActionButtons = () => {
  return (
    <div className="flex gap-3">
      <button className="flex-1 px-2 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg text-xs font-medium hover:bg-gray-50 transition-all">
        Visualise Scenario
      </button>
      <button className="flex-1 px-2 py-3 bg-[#6b7c6e] text-white rounded-lg text-xs font-medium hover:bg-[#5a6a5d] transition-all">
        Save Scenario
      </button>
    </div>
  );
};

