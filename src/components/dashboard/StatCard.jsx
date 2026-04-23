import {
  Wallet,
  CircleDollarSign,
  Database,
  ChartNoAxesCombined,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

const iconMap = {
  Wallet,
  CircleDollarSign,
  Database,
  ChartNoAxesCombined,
};

const StatCard = ({
  title,
  amount,
  currencySymbol,
  changePercent,
  changeDirection,
  label,
  variant,
  icon,
}) => {
  const Icon = iconMap[icon];
  const isOrange = variant === "orange";
  const isUp = changeDirection === "up";

  const badgeClass = isOrange
    ? "bg-white/10 text-white"
    : isUp
      ? "bg-green-200/50 text-green-600"
      : "bg-red-200/50 text-red-600";

  const textClass = isOrange ? "text-white" : "text-[#111]";
  const subtitleClass = isOrange ? "text-white/80" : "text-[#888]";

  return (
    <div
      className="w-full h-full flex flex-col justify-between p-3 rounded-xl"
      style={
        isOrange
          ? {
              background:
                "linear-gradient(45deg, rgba(234,88,12,1) 40%, rgba(247,145,104,1) 95%)",
            }
          : { background: "#E8E8E8" }
      }
    >
      <div className="flex items-center justify-between">
        <p className={`text-sm font-medium ${textClass}`}>{title}</p>
        <div className={`p-2 rounded-full ${isOrange ? "bg-white/20" : "bg-[#DCDCDC]"}`}>
          {Icon && <Icon size={16} className={isOrange ? "text-white" : "text-black"} />}
        </div>
      </div>

      <p className={`text-3xl font-semibold ${textClass}`}>
        {currencySymbol}
        {amount.toLocaleString()}
      </p>

      <div className="flex items-center gap-2">
        <span
          className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-xs font-semibold ${badgeClass}`}
        >
          {isUp ? <ArrowUp size={11} /> : <ArrowDown size={11} />}
          {changePercent}%
        </span>
        <span className={`text-xs ${subtitleClass}`}>{label}</span>
      </div>
    </div>
  );
};

export default StatCard;
