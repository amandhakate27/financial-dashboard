import { monthlySpendingLimit } from "../data/dummyData";

const SpendingLimit = ({ data = monthlySpendingLimit }) => {
  const spentAmount = Number(data?.spentAmount || 0);
  const totalAmount = Number(data?.totalAmount || 0);
  const progressPercent =
    typeof data?.progressPercent === "number"
      ? Math.min(Math.max(data.progressPercent, 0), 100)
      : totalAmount > 0
        ? Math.min((spentAmount / totalAmount) * 100, 100)
        : 0;

  const formatCurrency = (amount) => {
    const localeMap = {
      USD: "en-US",
      EUR: "de-DE",
      GBP: "en-GB",
    };

    const locale = localeMap[data?.currency] || "en-US";

    try {
      return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: data?.currency || "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(amount);
    } catch {
      const formatted = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(amount);
      return `${data?.currencySymbol || "$"}${formatted}`;
    }
  };

  return (
    <div className="h-full w-full flex flex-col justify-between">
      <h3 className="text-sm text-[#111]">{data?.title}</h3>

      <div className="relative h-3 w-full rounded-full overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#EDEDED",
              backgroundImage:
                "repeating-linear-gradient(-58deg, rgba(180,180,180,0.58) 0px, rgba(180,180,180,0.58) 2px, rgba(237,237,237,0.95) 2px, rgba(237,237,237,0.95) 6px)",
            }}
          />
          <div
            className="absolute left-0 top-0 h-full rounded-full"
            style={{
              width: `${progressPercent}%`,
              backgroundColor: "#EA580C",
            }}
          />
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-[#555]">
          <span className="text-[#111] font-semibold">{formatCurrency(spentAmount)}</span>{" "}
          {data?.summaryLabel}
        </p>
        <p className="text-sm font-semibold text-[#555]">{formatCurrency(totalAmount)}</p>
      </div>
    </div>
  );
};

export default SpendingLimit;
