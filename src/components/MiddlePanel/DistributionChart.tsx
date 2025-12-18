import { Info } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3 text-xs">
        <div className="flex items-center gap-2">
          <div
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: payload[0].payload.color }}
          ></div>
          <span className="text-gray-700 font-medium">{payload[0].name}:</span>
          <span className="text-gray-900 font-semibold">{payload[0].value}%</span>
        </div>
      </div>
    );
  }
  return null;
};

export const DistributionChart = () => {
  const data = [
    { name: 'House', value: 70.55, color: '#14b8a6' },
    { name: 'Land', value: 29.45, color: '#9ca3af' }
  ];

  return (
    <div className="bg-white p-4 flex flex-col lg:h-[90%] h-auto">
      <div className="flex items-center gap-1.5 mb-6">
        <h2 className="font-semibold text-gray-900">House & Land Distribution</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <Info className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center gap-6 min-h-[250px] lg:min-h-0">
        <div className="w-full flex-1 min-h-[150px] lg:min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius="55%"
                outerRadius="75%"
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    style={{ cursor: 'pointer' }}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="w-full rounded-lg p-4 space-y-3">
          {data.map((entry) => (
            <div key={entry.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></div>
                <span className="text-sm text-gray-700">{entry.name}</span>
              </div>
              <span className="text-sm font-semibold text-gray-900">{entry.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

