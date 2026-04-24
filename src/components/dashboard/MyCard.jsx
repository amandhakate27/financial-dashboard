// import { CreditCard, Plus } from "lucide-react"

// const MyCard = () => {
//   return (
//     <div className="flex justify-between items-center">
//       <div className="flex items-center gap-3">
//         <div className="h-8 w-8 border border-[#D1D5DB] rounded-full flex justify-center items-center"><CreditCard className="w-4 h-4" /></div>
//         <span className="text-md font-semibold text-[#111]">My Card</span>
//       </div>
//       <button className="flex items-center gap-1.5 py-2 px-3 bg-[#E8E8E8] rounded-2xl">
//         <span><Plus className="w-4 h-4" /></span>
//         <span className="text-sm text-[#111]">Add new</span>
//       </button>
//     </div>
//   )
// }

// export default MyCard

import { CreditCard, Plus } from "lucide-react"
import { myCards } from "../data/dummyData"

const MyCard = () => {
  return (
    <div className="flex flex-col gap-3">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 border border-[#D1D5DB] rounded-full flex justify-center items-center">
            <CreditCard className="w-4 h-4" />
          </div>
          <span className="text-md font-semibold text-[#111]">My Cards</span>
        </div>
        <button className="flex items-center gap-1.5 py-2 px-3 bg-[#E8E8E8] rounded-2xl">
          <Plus className="w-4 h-4" />
          <span className="text-sm text-[#111]">Add new</span>
        </button>
      </div>

      {/* Cards */}
      <div
        className="pt-2 flex gap-3 overflow-x-auto pb-2 pr-2
        [scrollbar-width:thin] [scrollbar-color:#bdbdbd_transparent]
        [&::-webkit-scrollbar]:h-1.5
        [&::-webkit-scrollbar-track]:bg-transparent
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-[#bdbdbd]
        hover:[&::-webkit-scrollbar-thumb]:bg-[#a8a8a8]"
      >
        {myCards.map(card => (
          <div key={card.id} className="relative shrink-0 min-w-[66%] max-w-[66%]">

            {/* Card Image */}
            <img
              src={card.image}
              alt={`Card ending ${card.last4}`}
              className="w-full h-auto rounded-2xl object-contain"
            />

            {/* Active Badge — top left overlay */}
            <div className={`absolute left-9 ${card.id === 2 ? "top-2" : "top-2.5"}`}>
              <span className={`inline-flex items-center leading-none text-[10px] font-semibold px-2.5 py-1.5 rounded-full
                ${card.status === "Active"
                  ? "bg-white text-[#111]"
                  : "bg-[#FEE2E2] text-[#EF4444]"
                }`}
              >
                {card.status}
              </span>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default MyCard
