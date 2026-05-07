import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Chat() {

  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function sendMessage() {

    if(question.trim() === "") return;

    const userMessage = {
      sender: "You",
      text: question
    };

    setMessages(prev => [...prev, userMessage]);

    setLoading(true);

    try {

      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=YOUR_GEMINI_API_KEY",
        {
          contents: [
            {
              parts: [
                {
                  text: question
                }
              ]
            }
          ]
        }
      );

      const aiText = response.data.candidates[0].content.parts[0].text;

      const aiMessage = {
        sender: "AI",
        text: aiText
      };

      setMessages(prev => [...prev, aiMessage]);

    }

    catch(error) {

      setMessages(prev => [
        ...prev,
        {
          sender: "AI",
          text: "Unable to connect to AI right now."
        }
      ]);

    }

    setLoading(false);
    setQuestion("");
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white p-6">

      <Link to="/">
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-bold mb-6">
          Home
        </button>
      </Link>

      <h1 className="text-5xl font-bold text-yellow-400 text-center mb-10">
        AI Bible Chat
      </h1>

      <div className="max-w-5xl mx-auto bg-slate-800 rounded-3xl p-6 shadow-2xl">

        <div className="h-[500px] overflow-y-auto bg-slate-900 rounded-2xl p-6 mb-6 space-y-5">

          {messages.length === 0 && (
            <p className="text-gray-400 text-center text-lg">
              Ask anything about faith, hope, love, or scripture.
            </p>
          )}

          {messages.map((msg, index) => (

            <div
              key={index}
              className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}
            >

              <div
                className={`max-w-xl px-5 py-4 rounded-2xl ${
                  msg.sender === "You"
                    ? "bg-yellow-400 text-black"
                    : "bg-slate-700 text-white"
                }`}
              >

                <p className="font-bold mb-2">
                  {msg.sender}
                </p>

                <p>
                  {msg.text}
                </p>

              </div>

            </div>

          ))}

          {loading && (
            <p className="text-gray-400">
              AI is thinking...
            </p>
          )}

        </div>

        <div className="flex gap-4">

          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask a Bible question..."
            className="flex-1 p-4 rounded-2xl bg-slate-700 outline-none"
          />

          <button
            onClick={sendMessage}
            className="bg-yellow-400 text-black px-8 rounded-2xl font-bold hover:bg-yellow-300"
          >
            Send
          </button>

        </div>

      </div>

    </div>
  )
}

export default Chat;