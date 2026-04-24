import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { chartData } from "../data/dummyData";

const LossBar = (props) => {
  const { x, y, width, height } = props;
  if (!height || height <= 0) return null;
  const r = 6;
  return <rect x={x} y={y} width={width} height={height} rx={r} ry={r} fill="#1A1A1A" />;
};

const ProfitBar = (props) => {
  const { x, y, width, height, index } = props;
  if (!height || height <= 0) return null;
  const segmentGap = 4;
  const adjustedHeight = Math.max(height - segmentGap, 0);
  if (adjustedHeight <= 0) return null;
  const patId = `hatch-${index}`;
  return (
    <g>
      <defs>
        <pattern
          id={patId}
          patternUnits="userSpaceOnUse"
          width={8}
          height={8}
          patternTransform="rotate(45)"
        >
          <rect width={8} height={8} fill="#EA580C" />
          <line
            x1={0}
            y1={0}
            x2={0}
            y2={8}
            stroke="#c4c4c4"
            strokeWidth={2.5}
            strokeOpacity={0.4}
          />
        </pattern>
      </defs>
      <rect x={x} y={y} width={width} height={adjustedHeight} rx={8} ry={8} fill={`url(#${patId})`} />
    </g>
  );
};

const formatY = (v) => {
  if (v === 0) return "00";
  return v >= 1000 ? `${v / 1000}k` : v;
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div 
        className="gloss-active px-2.5 py-1.5 text-white shadow-[0_8px_20px_rgba(0,0,0,0.2)]" 
        style={{ borderRadius: '10px' }}
      >
        <p className="text-[11px] text-center font-medium mb-1 text-gray-100">{label}</p>
        <div className="flex flex-col gap-0.5">
          {payload.map((entry, index) => {
             const dotColor = entry.name === 'Profit' ? '#EA580C' : '#A3A3A3';
             return (
              <div key={index} className="flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-1">
                  <span 
                    className="inline-block h-1 w-1 rounded-sm" 
                    style={{ backgroundColor: dotColor }} 
                  />
                  <span className="text-gray-300">{entry.name}:</span>
                </div>
                <span className="font-medium ml-2">${(entry.value / 1000).toFixed(0)}k</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return null;
};

const IncomeChart = () => {
  const chartWidth = Math.max(chartData.length * 45, 540);
  const yLabels = ["60k", "50k", "40k", "30k", "20k", "10k", "00"];

  return (
    <div className="flex h-full flex-col">
      <h2 className="text-lg font-medium text-[#111]">Total Income</h2>
      <p className="mt-1 mb-3 text-xs text-[#555]">
        View your income in a certain period of time
      </p>

      <div className="flex-1 rounded-xl bg-[#E8E8E8] p-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-[#111]">Profit and Loss</span>
          <div className="flex items-center gap-4 text-xs text-[#333]">
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-3 w-3 rounded-sm bg-[#EA580C]" />
              Profit
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-3 w-3 rounded-sm bg-[#1A1A1A]" />
              Loss
            </span>
          </div>
        </div>

        <div className="flex gap-1">
          <div className="w-6 shrink-0 pt-2 pb-6">
            <div className="h-[160px] flex flex-col justify-between text-[#666] text-[11px]">
              {yLabels.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>
          </div>

          <div
            className="flex-1 overflow-x-auto overflow-y-hidden
            [scrollbar-width:thin] [scrollbar-color:#bdbdbd_transparent]
            [&::-webkit-scrollbar]:h-1.5
            [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-[#bdbdbd]
            hover:[&::-webkit-scrollbar-thumb]:bg-[#a8a8a8]"
          >
            <div style={{ width: chartWidth, height: 190 }}>
              <BarChart width={chartWidth} height={190} data={chartData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }} barCategoryGap="16%">
                <CartesianGrid
                  vertical={false}
                  horizontal={false}
                  strokeDasharray="4 4"
                  stroke="#B5B5B5"
                  strokeOpacity={0.9}
                />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#666", fontSize: 12 }}
                />
                <YAxis
                  hide
                  tickFormatter={formatY}
                  domain={[0, 60000]}
                  ticks={[0, 10000, 20000, 30000, 40000, 50000, 60000]}
                />
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: 'transparent' }}
                />
                <Bar dataKey="loss" stackId="a" shape={<LossBar />} name="Loss" maxBarSize={30} />
                <Bar dataKey="profit" stackId="a" shape={<ProfitBar />} name="Profit" maxBarSize={30} />
              </BarChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeChart;
