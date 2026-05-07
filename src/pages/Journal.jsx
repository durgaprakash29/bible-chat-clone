import { useState } from "react";

function Journal() {

  const [prayer, setPrayer] = useState("");
  const [entries, setEntries] = useState([]);

  function savePrayer() {

    if (prayer.trim() === "") {
      return;
    }

    setEntries([...entries, prayer]);

    setPrayer("");
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">

      <h1 className="text-4xl font-bold text-yellow-400 text-center mb-8">
        Prayer Journal
      </h1>

      <div className="max-w-3xl mx-auto bg-slate-800 p-6 rounded-2xl shadow-lg">

        <p className="text-gray-300 mb-4">
          Write your daily prayers, thoughts, and reflections.
        </p>

        <textarea
          rows="5"
          value={prayer}
          onChange={(e) => setPrayer(e.target.value)}
          placeholder="Write your prayer here..."
          className="w-full p-4 rounded-lg bg-slate-700 outline-none resize-none"
        />

        <button
          onClick={savePrayer}
          className="mt-4 bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300"
        >
          Save Prayer
        </button>

        <div className="mt-10">

          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Saved Prayers
          </h2>

          {entries.length === 0 ? (
            <p className="text-gray-400">
              No prayers saved yet.
            </p>
          ) : (
            entries.map((item, index) => (
              <div
                key={index}
                className="bg-slate-700 p-4 rounded-xl mb-4"
              >
                {item}
              </div>
            ))
          )}

        </div>

      </div>

    </div>
  );
}

export default Journal;