import { cardData } from "@/constants";

import { cn } from "@/lib/utils";
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";

export interface CardProps {
  title: string;
  value: string;
  pillText: string;
  trend: "up" | "down";
  period: string;
}

const Card = ({ title, value, pillText, trend, period }: CardProps) => {
  return (
    <div className="p-4 col-span-12 md:col-span-12 lg:col-span-6 2xl:col-span-3 rounded border border-stone-300">
      <div className="flex max-sm:flex-col max-sm:gap-4 mb-8 items-start justify-between">
        <div>
          <h3 className="text-stone-500 mb-2 text-sm">{title}</h3>
          <p className="text-2xl font-semibold">{value}</p>
        </div>
        <span
          className={cn(
            "text-xs flex items-center gap-1 font-medium px-2 py-1 rounded w-fit",

            trend === "up"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          )}
        >
          {trend === "up" ? <FiTrendingUp /> : <FiTrendingDown />}
          {pillText}
        </span>
      </div>

      <p className="text-xs text-stone-500">{period}</p>
    </div>
  );
};

const StatCards = () => {
  return (
    <>
      {cardData.map((card) => (
        <Card
          key={card.title}
          title={card.title}
          value={card.value}
          pillText={card.pillText}
          trend={card.trend}
          period={card.period}
        />
      ))}
    </>
  );
};

export default StatCards;
