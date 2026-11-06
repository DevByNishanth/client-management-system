import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const weeklyData = [
  { name: "W1", leads: 25 },
  { name: "W2", leads: 100 },
  { name: "W3", leads: 50 },
  { name: "W4", leads: 92 },
];

const monthlyData = [
  { name: "Jan", leads: 120 },
  { name: "Feb", leads: 180 },
  { name: "Mar", leads: 150 },
  { name: "Apr", leads: 240 },
];

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-xl border border-[#d66b00] bg-amber-800/70 px-4 py-3 shadow-xl">
      <p className="mb-1 text-xs text-gray-100">{label}</p>

      <p className="text-lg font-semibold text-white">
        {payload[0].value}{" "}
        <span className="text-sm font-normal text-white">leads</span>
      </p>
    </div>
  );
}

export default function LeadsChart() {
  const [period, setPeriod] = useState("weekly");

  const data = period === "weekly" ? weeklyData : monthlyData;

  const totalLeads = data.reduce((total, item) => total + item.leads, 0);

  const highestLeads = Math.max(...data.map((item) => item.leads));

  return (
    <div className="w-full rounded-2xl col-span-8 bg-[#222c4191]/40 border border-[#28395e91]  p-5 text-white">
      {/* Header */}
      <div className="mb-2 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold">Sales Overview</h2>

          <p className="mt-1 text-sm text-gray-400">
            Track your lead generation performance
          </p>
        </div>

        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="cursor-pointer rounded-lg  bg-gray-900 border border-gray-700 px-3 py-2 text-sm text-gray-200 outline-none "
        >
          <option value="weekly">This Month</option>
          <option value="monthly">Last 4 Months</option>
        </select>
      </div>

      {/* Chart Summary */}
      <div className="mb-6">
        <div className="mt-1 flex items-center gap-3">
          <h3 className="text-3xl font-bold">{totalLeads}</h3>

          <span className="rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400">
            +12%
          </span>
        </div>
      </div>

      {/* Area Chart */}
      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: -35, bottom: 0 }}
          >
            <defs>
              <linearGradient id="leadsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="50%" stopColor="#d66b00" stopOpacity={0.5} />

                <stop offset="125%" stopColor="#e88420" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#de6e00"
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#A1A1AA", fontSize: 12 }}
              dy={12}
            />

            <YAxis
              domain={[0, highestLeads + 10]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#A1A1AA", fontSize: 12 }}
              allowDecimals={false}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "#de6e00",
                strokeDasharray: "4 4",
              }}
            />

            <Area
              type="monotone"
              dataKey="leads"
              stroke="#d66b00"
              strokeWidth={3}
              fill="url(#leadsGradient)"
              activeDot={{
                r: 6,
                fill: "#de6e00",
                stroke: "#FFFFFF",
                strokeWidth: 2,
              }}
              dot={{
                r: 4,
                fill: "#de6e00",
                stroke: "#FFFFFF",
                strokeWidth: 1,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
