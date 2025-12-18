import { useState } from 'react';
import { ArrowRightLeft } from 'lucide-react';

export const ComparisonControls = () => {
  const [scenario1, setScenario1] = useState('base-line');
  const [scenario2, setScenario2] = useState('scenario-1');

  const scenarios = [
    { value: 'base-line', label: 'Base Line' },
    { value: 'scenario-1', label: 'Scenario 1' },
    { value: 'scenario-2', label: 'Scenario 2' },
    { value: 'scenario-3', label: 'Scenario 3' },
    { value: 'scenario-4', label: 'Scenario 4' },
  ];

  const handleSwap = () => {
    const temp = scenario1;
    setScenario1(scenario2);
    setScenario2(temp);
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <h2 className="text-sm font-semibold text-gray-900 w-full sm:w-auto">Select Comparison</h2>

      <div className="relative flex-1 sm:flex-none min-w-[150px]">
        <select
          value={scenario1}
          onChange={(e) => setScenario1(e.target.value)}
          className="appearance-none w-full pl-3 pr-7 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white cursor-pointer hover:bg-gray-50 transition-colors"
        >
          {scenarios.map((scenario) => (
            <option key={scenario.value} value={scenario.value}>
              Select Scenario: {scenario.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <button
        onClick={handleSwap}
        className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
        title="Swap scenarios"
      >
        <ArrowRightLeft className="w-4 h-4 text-gray-500" />
      </button>

      <div className="relative flex-1 sm:flex-none min-w-[150px]">
        <select
          value={scenario2}
          onChange={(e) => setScenario2(e.target.value)}
          className="appearance-none w-full pl-3 pr-7 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white cursor-pointer hover:bg-gray-50 transition-colors"
        >
          {scenarios.map((scenario) => (
            <option key={scenario.value} value={scenario.value}>
              Scenario 2: {scenario.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

