"use client";

import { customerSegmentationData } from "@/constants";
import { MdDataUsage } from "react-icons/md";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const UsageRadar = () => {
  return (
    <div className="col-span-12 xl:col-span-4 overflow-hidden rounded border border-stone-300">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium">
          <MdDataUsage /> Usage
        </h3>
      </div>

      <div
        style={{
          width: "100%",
          height: 300,
        }}
        className="text-sm"
      >
        <ResponsiveContainer>
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="80%"
            data={customerSegmentationData}
          >
            <PolarGrid stroke="#374151" />
            <PolarAngleAxis dataKey="subject" stroke="#9CA3AF" />
            <PolarRadiusAxis angle={60} domain={[0, 150]} stroke="#9CA3AF" />
            <Radar
              name="Segment A"
              dataKey="A"
              stroke="#4d4d4d"
              fill="#4d4d4d"
              fillOpacity={0.6}
            />
            <Radar
              name="Segment B"
              dataKey="B"
              stroke="#a7a7a7"
              fill="#a7a7a7"
              fillOpacity={0.6}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffff",
                borderColor: "#a7a7a7",
              }}
              itemStyle={{ color: "#a7a7a7" }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UsageRadar;
