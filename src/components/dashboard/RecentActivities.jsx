import { useState } from "react";
import { Search, ListFilter, MoreHorizontal, Check } from "lucide-react";
import { recentActivities } from "../data/dummyData";

const RecentActivities = () => {
  const gridCols = "grid-cols-[36px_120px_minmax(180px,1fr)_90px_112px_160px_48px]";

  const [selectedIds, setSelectedIds] = useState(
    () => new Set(recentActivities.filter((item) => item.checked).map((item) => item.id))
  );

  const formatPrice = (item) => {
    const formatted = new Intl.NumberFormat("en-US").format(item.price);
    return `${item.currencySymbol}${formatted}`;
  };

  const toggleSelection = (id) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const getStatusDotClass = (status) => {
    if (status === "Completed") return "bg-[#22C55E]";
    if (status === "Pending") return "bg-[#EF4444]";
    return "bg-[#EAB308]";
  };

  return (
    <div className="h-full flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-[#111]">Recent Activities</h3>
        <div className="flex items-center gap-3">
          <button className="inline-flex w-52 items-center justify-start gap-2 rounded-xl border border-[#D9D9D9] bg-[#F5F5F5] px-3 py-2.5 text-[#212121]">
            <Search className="h-3 w-3" />
            <span className="text-xs font-semibold">Search</span>
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl border border-[#D9D9D9] bg-[#F5F5F5] px-3 py-2.5 text-[#212121]">
            <span className="text-xs font-semibold">Filter</span>
            <ListFilter className="h-3 w-3" />
          </button>
        </div>
      </div>

      <div
        className="mt-2 flex-1 min-h-0 overflow-hidden rounded-2xl border border-[#E3E3E3]"
        style={{ height: "260px" }}
      >
        <div className={`sticky top-0 z-10 grid w-full ${gridCols} items-center gap-x-1 bg-[#E8E8E8] px-2.5 py-4 text-xs font-semibold text-[#666]`}>
          <div className="flex justify-center">
            <span className="h-4 w-4 rounded border border-[#D8D8D8] bg-[#F5F5F5]" />
          </div>
          <p>Order ID</p>
          <p>Activity</p>
          <p>Price</p>
          <p>Status</p>
          <p>Date</p>
          <div />
        </div>

        <div
          className="h-[230px] overflow-y-auto overflow-x-hidden p-0
          [scrollbar-width:thin] [scrollbar-color:#bdbdbd_transparent]
          [&::-webkit-scrollbar]:w-1.5
          [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-thumb]:rounded-full
          [&::-webkit-scrollbar-thumb]:bg-[#bdbdbd]
          hover:[&::-webkit-scrollbar-thumb]:bg-[#a8a8a8]"
        >
          {recentActivities.map((item) => {
          const isSelected = selectedIds.has(item.id);
          return (
          <div
            key={item.id}
            onClick={() => toggleSelection(item.id)}
            className={`min-h-12 cursor-pointer grid w-full ${gridCols} items-center gap-x-1 border-t border-[#ECECEC] px-2.5 py-1 xl:h-12 xl:py-0 ${
              isSelected ? "bg-[#E8E8E8]" : "bg-[#F5F5F5]"
            }`}
          >
            <div className="flex justify-center">
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  toggleSelection(item.id);
                }}
                className={`inline-flex h-4 w-4 items-center justify-center rounded border ${
                  isSelected
                    ? "border-[#111] bg-[#111] text-white"
                    : "border-[#D8D8D8] bg-[#F5F5F5]"
                }`}
              >
                {isSelected ? <Check className="h-3.5 w-3.5" /> : null}
              </button>
            </div>

            <p className="truncate text-xs font-medium text-[#111]">{item.orderId}</p>

            <div className="flex min-w-0 flex-1 items-start gap-3 pt-0.5">
              <img
                src={item.icon}
                alt={item.activity}
                className="h-4 w-4 rounded-full object-contain"
              />
              <p className="mt-0.5 min-w-0 break-words text-[13px] font-medium leading-tight text-[#111] xl:truncate xl:whitespace-nowrap" title={item.activity}>
                {item.activity}
              </p>
            </div>

            <p className="whitespace-nowrap text-xs font-medium text-[#111]">{formatPrice(item)}</p>

            <div className="min-w-0 flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${getStatusDotClass(item.status)}`} />
              <p className="truncate whitespace-nowrap text-xs font-medium text-[#111]">{item.status}</p>
            </div>

            <p className="mt-0.5 break-words text-xs font-medium leading-tight text-[#333] xl:truncate xl:whitespace-nowrap" title={item.date}>
              {item.date}
            </p>

            <button className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[#4B5563] hover:bg-[#E5E7EB] hover:text-[#111] transition-colors">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>
          );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentActivities;
