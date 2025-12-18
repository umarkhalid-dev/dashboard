import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { Info, Download, Grid3x3 } from 'lucide-react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3 text-xs">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Base Line:</span>
            <span className="font-semibold">{payload[0]?.value || 2500}</span>
            <span className="text-green-600 flex items-center">
              ↑ 00% YoY
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Scenario 1:</span>
            <span className="font-semibold">{payload[1]?.value || 4000}</span>
            <span className="text-red-500 flex items-center">
              ↓ 00% YoY
            </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export const DemandChart = () => {
  const [excludeCurrent, setExcludeCurrent] = useState(true);
  const [viewMode, setViewMode] = useState<'annual' | 'cumulative'>('annual');

  const data = [
    { year: 2024, baseline: 15000, scenario: 10000 },
    { year: 2025, baseline: 13000, scenario: 17000 },
    { year: 2026, baseline: 12000, scenario: 25000 },
    { year: 2027, baseline: 20000, scenario: 10000, highlighted: true },
    { year: 2028, baseline: 40000, scenario: 8000 },
    { year: 2029, baseline: 20000, scenario: 25000 },
    { year: 2030, baseline: 30000, scenario: 40000 },
    { year: 2031, baseline: 30000, scenario: 18000 },
    { year: 2032, baseline: 10000, scenario: 18000 },
    { year: 2033, baseline: 10000, scenario: 38000 },
    { year: 2034, baseline: 15000, scenario: 5000 },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderCustomDot = (props: any) => {
    const { cx, cy, payload, dataKey } = props;
    if (payload?.highlighted) {
      return (
        <circle
          cx={cx}
          cy={cy}
          r={5}
          fill="white"
          stroke={dataKey === 'scenario' ? '#14b8a6' : '#9ca3af'}
          strokeWidth={2}
        />
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-4 flex flex-col lg:h-full h-auto">
      <div className="flex items-center gap-1.5 mb-4">
        <h2 className="font-semibold text-gray-900">Demand (New Applications)</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <Info className="w-3.5 h-3.5" />
        </button>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 mb-4">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="flex gap-1.5 w-full sm:w-auto">
            <button
              onClick={() => setExcludeCurrent(true)}
              className={`flex-1 sm:flex-none px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors ${excludeCurrent
                ? 'bg-[#2d2d2d] text-white'
                : 'bg-[#e5e5e5] text-gray-700 hover:bg-gray-300'
                }`}
            >
              Excl. Current Demand
            </button>
            <button
              onClick={() => setExcludeCurrent(false)}
              className={`flex-1 sm:flex-none px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors ${!excludeCurrent
                ? 'bg-[#2d2d2d] text-white'
                : 'bg-[#e5e5e5] text-gray-700 hover:bg-gray-300'
                }`}
            >
              Incl. Current Demand
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#14b8a6]"></div>
              <span className="text-[11px] text-gray-600">Base Line</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#9ca3af]"></div>
              <span className="text-[11px] text-gray-600">Scenario 1</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setViewMode('annual')}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors ${viewMode === 'annual'
              ? 'bg-[#2d2d2d] text-white'
              : 'bg-[#e5e5e5] text-gray-700 hover:bg-gray-300'
              }`}
          >
            Annual
          </button>
          <button
            onClick={() => setViewMode('cumulative')}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors ${viewMode === 'cumulative'
              ? 'bg-[#2d2d2d] text-white'
              : 'bg-[#e5e5e5] text-gray-700 hover:bg-gray-300'
              }`}
          >
            Cumulative
          </button>
          <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <Grid3x3 className="w-3.5 h-3.5 text-gray-500" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <Download className="w-3.5 h-3.5 text-gray-500" />
          </button>
        </div>
      </div>

      <div className="flex-1 relative min-h-[350px] lg:min-h-0">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1">
          <div className="bg-gray-100 px-2 py-1 rounded text-[10px] text-gray-600 font-medium -rotate-90 whitespace-nowrap">
            Units
          </div>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 50, bottom: 50 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
            <XAxis
              dataKey="year"
              tick={{ fontSize: 11, fill: '#6b7280' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: '#6b7280' }}
              tickFormatter={(value) => `${value / 1000}K`}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine
              x={2027}
              stroke="#9ca3af"
              strokeDasharray="3 3"
              strokeWidth={1}
            />
            <Line
              type="monotone"
              dataKey="baseline"
              stroke="#14b8a6"
              strokeWidth={2}
              dot={renderCustomDot}
              strokeDasharray="5 5"
            />
            <Line
              type="monotone"
              dataKey="scenario"
              stroke="#9ca3af"
              strokeWidth={2}
              dot={renderCustomDot}
            />
          </LineChart>
        </ResponsiveContainer>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1">
          <div className="bg-gray-100 px-3 py-1 rounded text-[10px] text-gray-600 font-medium whitespace-nowrap">
            Year
          </div>
        </div>
      </div>

    </div>
  );
};

