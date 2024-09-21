"use client";

import { userGrowthData } from "@/constants";

import { FiUser } from "react-icons/fi";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ActivityGraph = () => {
  return (
    <div className="col-span-12 xl:col-span-8 overflow-hidden rounded border border-stone-300">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiUser /> Activity
        </h3>
      </div>

      <div className="h-80 text-sm">
        <ResponsiveContainer>
          <LineChart
            data={userGrowthData}
            accessibilityLayer
            margin={{
              right: 22,
            }}
          >
            <CartesianGrid vertical={false} />
            <YAxis tickLine={false} axisLine={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={4}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffff",
                borderColor: "#a7a7a7",
              }}
              itemStyle={{ color: "#a7a7a7" }}
            />
            <Line
              type="natural"
              dataKey="users"
              dot={false}
              strokeWidth={3}
              activeDot={{
                r: 8,
                strokeWidth: 2,
              }}
              stroke="#2b2b2b"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityGraph;
