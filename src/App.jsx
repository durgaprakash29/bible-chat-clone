import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home, MessageCircle, BookOpen, Flame, Users } from "lucide-react";
import Chat from "./pages/Chat";
import Journal from "./pages/Journal";
import PrayerWall from "./pages/PrayerWall";
import Streak from "./pages/Streak";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white flex">

      <div className="w-64 bg-slate-800 p-6 hidden md:block">

        <h1 className="text-3xl font-bold text-yellow-400 mb-10">
          Bible Chat
        </h1>

        <div className="space-y-5">

          <Link to="/" className="flex items-center gap-3 hover:text-yellow-400">
            <Home /> Home
          </Link>

          <Link to="/chat" className="flex items-center gap-3 hover:text-yellow-400">
            <MessageCircle /> AI Chat
          </Link>

          <Link to="/journal" className="flex items-center gap-3 hover:text-yellow-400">
            <BookOpen /> Journal
          </Link>

          <Link to="/streak" className="flex items-center gap-3 hover:text-yellow-400">
            <Flame /> Streak
          </Link>

          <Link to="/wall" className="flex items-center gap-3 hover:text-yellow-400">
            <Users /> Prayer Wall
          </Link>

        </div>

      </div>

      <div className="flex-1 flex items-center justify-center p-10">

        <div className="text-center max-w-4xl">

          <h1 className="text-6xl font-bold text-yellow-400 mb-6">
            Grow Closer To God Every Day
          </h1>

          <p className="text-xl text-gray-300 mb-10">
            Daily devotionals, AI scripture guidance, prayer journaling,
            streak tracking, and community support.
          </p>

          <div className="bg-slate-800 p-8 rounded-3xl shadow-2xl">

            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Verse Of The Day
            </h2>

            <p className="text-2xl italic">
              “For I know the plans I have for you,” declares the Lord.
            </p>

            <p className="mt-4 text-gray-400 text-lg">
              — Jeremiah 29:11
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/streak" element={<Streak />} />
        <Route path="/wall" element={<PrayerWall />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App;