import Navbar from './components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'
import Dashboard from './pages/Dashboard'


const App = () => {
  return (
    <div className="flex flex-col h-screen bg-[#E8E8E8] p-3">

      <Navbar /> 

      <div className="flex flex-1 overflow-hidden mt-3">
        <Sidebar />
        <main className="flex-1 overflow-auto p-6">
          <Dashboard />
        </main>
      </div>

    </div>
  )
}

export default App