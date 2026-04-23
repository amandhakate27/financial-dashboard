import { wallets } from "../data/dummyData";
import { EllipsisVertical } from "lucide-react";

const WalletList = () => {
  const formatAmount = (wallet) => {
    const formatted = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(wallet.amount);
    return `${wallet.currencySymbol}${formatted}`;
  };

  return (
    <div className="w-full mt-4 bg-[#E8E8E8] rounded-xl p-3">
      {/* Header */}
      <div className="flex items-center gap-1 mb-3">
        <span className="text-xs font-semibold text-[#111]">Wallets</span>
        <span className="text-xs text-[#888]">| Total {wallets.length} wallets</span>
      </div>

      {/* 3 Wallet Columns — horizontal layout matching screenshot */}
      <div className="grid grid-cols-3 gap-2">
        {wallets.map((wallet, index) => (
          <div
            key={wallet.id}
            className="flex flex-col gap-1 bg-[#F5F5F5] rounded-lg px-3 py-2"
          >
            {/* Row: Flag + Currency + 3-dot */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span
                  className="inline-flex h-4 w-4 shrink-0 items-center justify-center [&>svg]:w-full [&>svg]:h-full"
                  dangerouslySetInnerHTML={{ __html: wallet.flagImg }}
                />
                <span className="text-xs text-[#111]">
                  {wallet.currency}
                </span>
              </div>
              <button className="text-[#aaa] hover:text-[#555] transition-colors">
                <EllipsisVertical className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Amount */}
            <p className="text-sm font-semibold text-[#111] leading-tight">
              {formatAmount(wallet)}
            </p>

            {/* Limit */}
            <p className="text-[10px] text-[#666] leading-tight">
              Limit is {wallet.limit}
            </p>

            {/* Status */}
            <p
              className={`text-[10px] font-semibold ${
                wallet.status === "Active" ? "text-green-500" : "text-red-400"
              }`}
            >
              {wallet.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletList;