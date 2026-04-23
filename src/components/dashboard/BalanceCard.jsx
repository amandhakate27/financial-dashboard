import { totalBalance } from "../data/dummyData"
import { ChevronDown, ArrowUp, ArrowDown, ArrowLeftRight } from "lucide-react"
import WalletList from "./WalletList.jsx"

const BalanceCard = () => {
  const currencyLocaleMap = {
    USD: 'en-US',
    EUR: 'de-DE',
    GBP: 'en-GB',
  }

  const locale = currencyLocaleMap[totalBalance.currency] || 'en-US'

  const formatFallback = () => {
    const amount = new Intl.NumberFormat(locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(totalBalance.totalBalance)

    return `${totalBalance.currencySymbol || ''}${amount}`
  }

  let formattedTotalBalance

  try {
    formattedTotalBalance = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: totalBalance.currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(totalBalance.totalBalance)
  } catch {
    formattedTotalBalance = formatFallback()
  }

  const isLowChange = totalBalance.changePercent < 5
  const isPositiveChange = totalBalance.changePercent > 0

  const changeBadgeClasses = isLowChange
    ? 'bg-red-100 text-gray-700'
    : isPositiveChange
      ? 'bg-green-200 text-green-700'
      : 'bg-red-200 text-gray-700'

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-[#212121] text-sm">Total Balance</p>
        <div className="flex items-center gap-1 border-2 border-[#E5E7EB] px-2 py-1 rounded-lg">
          <span
            className="inline-flex h-5 w-5"
            dangerouslySetInnerHTML={{ __html: totalBalance.flagImg }}
          />
          <p className="text-[#212121] text-sm">{totalBalance.currency}</p>
          <span><ChevronDown className="h-4 w-4" /></span>
        </div>
      </div>
      <div className="text-2xl font-semibold  text-[#111]">
        {formattedTotalBalance}
      </div>
      <div className="flex items-center gap-2">
        <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${changeBadgeClasses}`}>
          {totalBalance.arrow === "up" ? (
            <ArrowUp className="h-4 w-4" />
          ) : (
            <ArrowDown className="h-4 w-4" />
          )}
          {totalBalance.changePercent}%
        </span>
        <p className="text-[#212121] text-xs">
          {totalBalance.changeLabel}
        </p>
      </div>
      <div className="flex justify-between items-center mt-3">
        <button className="gloss-active text-white text-sm px-10 py-2 rounded-full inline-flex items-center gap-1.5">
          <ArrowLeftRight className="h-4 w-4" />
          Transfer
        </button>
        <button className="text-[#212121] text-sm px-10 py-2 rounded-full border border-[#E5E7EB] bg-[#E8E8E8] inline-flex items-center gap-1.5">
          <ArrowLeftRight className="h-4 w-4" />
          Request
        </button>
      </div>
      <WalletList />
    </div>
  )
}

export default BalanceCard