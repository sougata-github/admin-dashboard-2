import { tableRowsData } from "@/constants";

import { cn } from "@/lib/utils";
import { FiArrowUpRight, FiDollarSign, FiMoreHorizontal } from "react-icons/fi";

const TableHead = () => {
  return (
    <thead>
      <tr className="text-sm font-normal text-stone-500">
        <th className="text-start p-1.5">ID</th>
        <th className="text-start p-1.5">SKU</th>
        <th className="text-start p-1.5">Date</th>
        <th className="text-start p-1.5">Price</th>
        <th className="w-8"></th>
      </tr>
    </thead>
  );
};

export interface TableRowProps {
  id: string;
  sku: string;
  date: string;
  price: string;
  order: number;
}

const TableRow = ({ id, sku, date, price, order }: TableRowProps) => {
  return (
    <tr
      className={cn(
        "text-sm font-normal text-stone-500",
        order % 2 ? "bg-stone-100 text-sm" : "text-sm"
      )}
    >
      <td className="p-1.5">
        <a
          href="/"
          className="text-stone-950 underline flex items-center gap-1"
        >
          {id} <FiArrowUpRight />
        </a>
      </td>
      <td className="p-1.5">{sku}</td>
      <td className="p-1.5">{date}</td>
      <td className="p-1.5">{price}</td>
      <td className="w-8">
        <button className="hover:bg-stone-200 transition-colors grid place-content-center rounded text-sm size-8">
          <FiMoreHorizontal />
        </button>
      </td>
    </tr>
  );
};

const RecentTransactions = () => {
  return (
    <div className="col-span-12 p-4 rounded border border-stone-300">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiDollarSign /> Recent Transactions
        </h3>

        <button className="mt-2 text-sm text-stone-950 hover:underline">
          See all
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto min-w-max">
          <TableHead />
          <tbody>
            {tableRowsData.map((tableRow) => (
              <TableRow key={tableRow.id} {...tableRow} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTransactions;
