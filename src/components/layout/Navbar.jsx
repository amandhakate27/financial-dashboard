

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">

      {/* LEFT — Logo */}
      <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-3xl" >
        {/* logo + "Finexy" text */}
        <div
          className="h-9 w-9 rounded-full flex justify-center items-center"
          style={{ background: "linear-gradient(45deg, rgba(234, 88, 12, 1) 40%, rgba(247, 145, 104, 1) 95%)" }}
        ><span className="text-white font-bold">F</span></div>
        <span><h1 className="text-[#111] font-semibold">Finexy</h1></span>
      </div>

      {/* CENTER — Nav Links */}
      <div className="flex items-center gap-6">
        {/* Overview (active — black pill) */}
        {/* Activity, Manage, Program, Account, Reports */}
      </div>

      {/* RIGHT — Icons + Profile */}
      <div className="flex items-center gap-4">
        {/* Search icon, Bell icon, Info icon */}
        {/* Avatar + Name + ChevronDown */}
      </div>

    </nav>
  )
}

export default Navbar