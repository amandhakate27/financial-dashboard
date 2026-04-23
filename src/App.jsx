import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'
import Overview from './pages/Overview'
import Activity from './pages/Activity'
import Manage from './pages/Manage'
import Program from './pages/Program'
import Account from './pages/Account'
import Reports from './pages/Reports'
import NotFound from './pages/NotFound'
import { userProfile } from './components/data/dummyData'


const App = () => {
  const firstName = userProfile.name?.split(' ')[0] || 'User'

  return (
    <div className="flex flex-col h-screen bg-[#E8E8E8] p-3">

      <Navbar />

      <div className="flex flex-1 overflow-hidden mt-3">
        <Sidebar />
        <main className="flex-1 overflow-auto px-2">
          <Routes>
            <Route path="/overview" element={<Overview userName={firstName} />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/program" element={<Program />} />
            <Route path="/account" element={<Account />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>

    </div>
  )
}

export default App