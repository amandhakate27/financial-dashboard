import { NavLink } from 'react-router-dom'
import { Search, BellDot, CircleAlert, ChevronDown } from 'lucide-react'
import { userProfile } from '../data/dummyData'

const Navbar = () => {
  const formatEmail = (email) => {
    if (!email || email.length <= 16) {
      return email
    }

    const [localPart = '', domainPart = ''] = email.split('@')
    const shortLocal = localPart
    const shortDomain = domainPart.slice(0, 2)

    return `${shortLocal}.@${shortDomain}...`
  }

  return (
    <nav className="flex items-center justify-between">

      {/* LEFT — Logo */}
      <div className="flex items-center gap-2 bg-white px-2.5 py-1.5 rounded-3xl" >
        {/* logo + "Finexy" text */}
        <div
          className="h-9 w-9 rounded-full flex justify-center items-center"
          style={{ background: 'linear-gradient(45deg, rgba(234, 88, 12, 1) 40%, rgba(247, 145, 104, 1) 95%)' }}
        ><span className="text-white font-bold" style={{ fontFamily: 'cursive' }}>F</span></div>
        <span><h1 className="text-[#111] font-semibold">Finexy</h1></span>
      </div>

      {/* CENTER — Nav Links */}
      <div className="flex items-center gap-2 bg-white px-2.5 py-2 rounded-3xl">
        {/* Overview (active — black pill) */}
        {/* Activity, Manage, Program, Account, Reports */}
        <NavLink
          to="/overview"
          className={({ isActive }) =>
            `px-3 py-1.5 text-[13px] rounded-full transition-all duration-300 ease-out ${isActive
              ? 'gloss-active text-white font-normal shadow-[0_8px_20px_rgba(0,0,0,0.2)]'
              : 'text-[#212121] hover:bg-gray-100'
            }`
          }
        >
          Overview
        </NavLink>
        <NavLink
          to="/activity"
          className={({ isActive }) =>
            `px-3 py-1.5 text-[13px] rounded-full transition-all duration-300 ease-out ${isActive
              ? 'gloss-active text-white font-normal shadow-[0_8px_20px_rgba(0,0,0,0.2)]'
              : 'text-[#212121] hover:bg-gray-100'
            }`
          }
        >
          Activity
        </NavLink>
        <NavLink
          to="/manage"
          className={({ isActive }) =>
            `px-3 py-1.5 text-[13px] rounded-full transition-all duration-300 ease-out ${isActive
              ? 'gloss-active text-white font-normal shadow-[0_8px_20px_rgba(0,0,0,0.2)]'
              : 'text-[#212121] hover:bg-gray-100'
            }`
          }
        >
          Manage
        </NavLink>
        <NavLink
          to="/program"
          className={({ isActive }) =>
            `px-3 py-1.5 text-[13px] rounded-full transition-all duration-300 ease-out ${isActive
              ? 'gloss-active text-white font-normal shadow-[0_8px_20px_rgba(0,0,0,0.2)]'
              : 'text-[#212121] hover:bg-gray-100'
            }`
          }
        >
          Program
        </NavLink>
        <NavLink
          to="/account"
          className={({ isActive }) =>
            `px-3 py-1.5 text-[13px] rounded-full transition-all duration-300 ease-out ${isActive
              ? 'gloss-active text-white font-normal shadow-[0_8px_20px_rgba(0,0,0,0.2)]'
              : 'text-[#212121] hover:bg-gray-100'
            }`
          }
        >
          Account
        </NavLink>
        <NavLink
          to="/reports"
          className={({ isActive }) =>
            `px-3 py-1.5 text-[13px] rounded-full transition-all duration-300 ease-out ${isActive
              ? 'gloss-active text-white font-normal shadow-[0_8px_20px_rgba(0,0,0,0.2)]'
              : 'text-[#212121] hover:bg-gray-100'
            }`
          }
        >
          Reports
        </NavLink>
      </div>

      {/* RIGHT — Icons + Profile */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4 bg-white px-4.5 py-3.5 rounded-3xl">
          <div className="flex items-center justify-center cursor-pointer">
            <Search size={20} className="text-black" />
          </div>
          <div className="flex items-center justify-center cursor-pointer">
            <BellDot size={20} className="text-black" />
          </div>
          <div className="flex items-center justify-center cursor-pointer">
            <CircleAlert size={20} className="text-black" />
          </div>
        </div>

        <div className="flex items-center gap-2 bg-white px-2.5 py-1.5 rounded-3xl cursor-pointer">
          <img
            src={userProfile.avatar}
            alt={userProfile.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-[14px] text-gray-900">{userProfile.name}</span>
            <span className="text-xs text-[#212121]">{formatEmail(userProfile.email)}</span>
          </div>
          <ChevronDown size={16} className="text-black" />
        </div>
      </div>

    </nav>
  )
}

export default Navbar

