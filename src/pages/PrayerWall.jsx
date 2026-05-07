function PrayerWall() {

  const prayers = [
    {
      text: "Please pray for my exams.",
      amens: 24
    },
    {
      text: "Pray for my family and health.",
      amens: 18
    },
    {
      text: "Pray for peace and strength.",
      amens: 30
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">

      <h1 className="text-5xl font-bold text-yellow-400 text-center mb-10">
        Community Prayer Wall
      </h1>

      <div className="max-w-4xl mx-auto space-y-6">

        {prayers.map((item, index) => (

          <div
            key={index}
            className="bg-slate-800 p-6 rounded-3xl shadow-lg"
          >

            <p className="text-xl mb-4">
              🙏 {item.text}
            </p>

            <button className="bg-yellow-400 text-black px-5 py-2 rounded-xl font-bold">
              ❤️ {item.amens} Amens
            </button>

          </div>

        ))}

      </div>

    </div>
  )
}

export default PrayerWall;