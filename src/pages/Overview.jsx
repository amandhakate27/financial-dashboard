import BalanceCard from '../components/dashboard/BalanceCard'
import StatCard from '../components/dashboard/StatCard'
import IncomeChart from '../components/dashboard/IncomeChart'
import SpendingLimit from '../components/dashboard/SpendingLimit'
import MyCard from '../components/dashboard/MyCard'
import RecentActivities from '../components/dashboard/RecentActivities'
import { statCards } from '../components/data/dummyData'

const Overview = ({ userName }) => {
  return (
    <div className="h-full flex flex-col gap-4">

      {/* Greeting */}
      <div className="rounded-2xl pt-2">
        <h1 className="text-3xl font-medium text-gray-900">Good morning, {userName}</h1>
        <p className="text-sm text-[#212121] mt-1">Stay on top of your tasks, monitor progress, and track status.</p>
      </div>

      {/* ROW 1 */}
      <div className="grid grid-cols-3 gap-4">

        {/* Col 1 — Balance Card */}
        <div className="min-h-[230px] rounded-2xl bg-[#F5F5F5] p-3">
          <BalanceCard />
        </div>

        {/* Col 2 — 4 mini cards */}
        <div className="min-h-[230px] rounded-2xl bg-[#F5F5F5] p-3 flex flex-col">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 flex-1">
            {statCards.map(card => (
              <StatCard key={card.id} {...card} />
            ))}
          </div>
        </div>

        {/* Col 3 — Income Chart */}
        <div className="min-h-[230px] rounded-2xl bg-[#F5F5F5] p-3">
          <IncomeChart />
        </div>

      </div>

      {/* ROW 2 */}
      <div className="grid grid-cols-3 gap-4">

        {/* Col 1 — Spending + Cards */}
        <div className="flex flex-col gap-4">
          <div className="min-h-[100px] rounded-2xl bg-[#F5F5F5] p-3"><SpendingLimit /></div>
          <div className="min-h-[240px] rounded-2xl bg-[#F5F5F5] p-3"><MyCard /></div>
        </div>

        {/* Col 2 — Recent Activities */}
        <div className="min-h-[260px] col-span-2 rounded-2xl bg-[#F5F5F5] p-3">
          <RecentActivities />
        </div>

      </div>

    </div>
  )
}

export default Overview
