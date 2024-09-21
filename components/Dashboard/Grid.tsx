import StatCards from "./StatCards";
import UsageRadar from "./UsageRadar";
import ActivityGraph from "./ActivityGraph";
import RecentTransactions from "./RecentTransactions";

const Grid = () => {
  return (
    <div className="px-4 grid gap-3 grid-cols-12">
      <StatCards />
      <ActivityGraph />
      <UsageRadar />
      <RecentTransactions />
    </div>
  );
};

export default Grid;
