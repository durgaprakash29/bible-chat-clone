function Streak() {

  const streak = 7;

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6">

      <div className="bg-slate-800 p-10 rounded-3xl text-center shadow-2xl max-w-xl w-full">

        <h1 className="text-5xl font-bold text-yellow-400 mb-6">
          🔥 Prayer Streak
        </h1>

        <p className="text-7xl font-bold mb-6">
          {streak}
        </p>

        <p className="text-gray-300 text-xl">
          You have stayed connected with God for 7 days.
        </p>

      </div>

    </div>
  )
}

export default Streak;