import { useState } from 'react';
import {
  SunMedium,
  Moon,
  LayoutGrid,
  CalendarDays,
  Mail,
  FileText,
  Users,
  Layers,
  Settings,
  CircleHelp,
  LogOut,
} from 'lucide-react';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('dashboard');

  return (
    <aside className="sticky top-0 h-[calc(100vh-100px)] flex flex-col items-center justify-between w-13">

      {/* Upper Group (Theme Toggles + Nav Links) */}
      <div className="flex-1 min-h-0 w-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex flex-col items-center gap-4 lg:gap-8 xl:gap-10">

        {/* Top - Theme Toggles */}
        <div className="flex flex-col items-center gap-2 bg-white rounded-full shadow-sm w-full max-w-[40px] py-2 shrink-0">
          <button className="p-2 rounded-full text-black transition-colors">
            <SunMedium size={18} />
          </button>
          <button className="p-2 rounded-full text-black transition-colors">
            <Moon size={18} />
          </button>
        </div>

        {/* Middle - Nav Links */}
        <div className="flex flex-col items-center gap-1.5 bg-white p-1 rounded-full shadow-sm w-full max-w-[40px] shrink-0">
          <button
            onClick={() => setActiveItem('dashboard')}
            className={`p-2 rounded-full transition-all duration-300 ease-out cursor-pointer ${activeItem === 'dashboard'
                ? 'gloss-active text-white scale-105 shadow-md'
                : 'text-black'
              }`}
          >
            <LayoutGrid size={18} />
          </button>
          <button
            onClick={() => setActiveItem('calendar')}
            className={`p-2 rounded-full transition-all duration-300 ease-out cursor-pointer ${activeItem === 'calendar'
                ? 'gloss-active text-white scale-105 shadow-md'
                : 'text-black'
              }`}
          >
            <CalendarDays size={18} />
          </button>
          <button
            onClick={() => setActiveItem('messages')}
            className={`p-2 rounded-full transition-all duration-300 ease-out cursor-pointer ${activeItem === 'messages'
                ? 'gloss-active text-white scale-105 shadow-md'
                : 'text-black'
              }`}
          >
            <Mail size={18} />
          </button>
          <button
            onClick={() => setActiveItem('documents')}
            className={`p-2 rounded-full transition-all duration-300 ease-out cursor-pointer ${activeItem === 'documents'
                ? 'gloss-active text-white scale-105 shadow-md'
                : 'text-black'
              }`}
          >
            <FileText size={18} />
          </button>
          <button
            onClick={() => setActiveItem('people')}
            className={`p-2 rounded-full transition-all duration-300 ease-out cursor-pointer ${activeItem === 'people'
                ? 'gloss-active text-white scale-105 shadow-md'
                : 'text-black'
              }`}
          >
            <Users size={18} />
          </button>
          <button
            onClick={() => setActiveItem('layers')}
            className={`p-2 rounded-full transition-all duration-300 ease-out cursor-pointer ${activeItem === 'layers'
                ? 'gloss-active text-white scale-105 shadow-md'
                : 'text-black'
              }`}
          >
            <Layers size={18} />
          </button>
          <button
            onClick={() => setActiveItem('settings')}
            className={`p-2 rounded-full transition-all duration-300 ease-out cursor-pointer ${activeItem === 'settings'
                ? 'gloss-active text-white scale-105 shadow-md'
                : 'text-black'
              }`}
          >
            <Settings size={18} />
          </button>
        </div>
      </div>

      {/* Bottom - Actions */}
      <div className="flex flex-col items-center gap-2 bg-white p-1 rounded-full shadow-sm w-full max-w-[40px] shrink-0 mb-2">
        <button className="p-2 rounded-full text-black transition-colors">
          <CircleHelp size={18} />
        </button>
        <button className="p-2 rounded-full text-black transition-colors">
          <LogOut size={18} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;