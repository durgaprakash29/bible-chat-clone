import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

function Chat() {

  const API_KEY = "AIzaSyC4a68z9_NJENIb-suqkXJ4ykozqMrGo_Y";

  const genAI = new GoogleGenerativeAI(API_KEY);

  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);

  async function sendMessage() {

    if (question.trim() === "") {
      return;
    }

    const userMessage = {
      sender: "You",
      text: question
    };

    setMessages((prev) => [...prev, userMessage]);

    try {

     const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash"
});

      const result = await model.generateContent(question);

      const response = await result.response;

      const text = response.text();

      const aiMessage = {
        sender: "AI",
        text: text
      };

      setMessages((prev) => [...prev, aiMessage]);

    }

    catch (error) {

      console.log(error);

      const aiMessage = {
        sender: "AI",
        text: "AI connection failed."
      };

      setMessages((prev) => [...prev, aiMessage]);

    }

    setQuestion("");
  }

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold text-yellow-400 mb-10">
        AI Bible Chat
      </h1>

      <div className="bg-slate-900 p-6 rounded-3xl">

        <div className="h-[500px] overflow-y-auto mb-5 space-y-4">

          {messages.map((msg, index) => (

            <div
              key={index}
              className={`p-4 rounded-2xl max-w-xl ${
                msg.sender === "You"
                  ? "bg-yellow-400 text-black ml-auto"
                  : "bg-slate-700"
              }`}
            >

              <p className="font-bold mb-2">
                {msg.sender}
              </p>

              <p>{msg.text}</p>

            </div>

          ))}

        </div>

        <div className="flex gap-4">

          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask something..."
            className="flex-1 p-4 rounded-xl bg-slate-800 outline-none"
          />

          <button
            onClick={sendMessage}
            className="bg-yellow-400 text-black px-8 rounded-xl font-bold"
          >
            Send
          </button>

        </div>

      </div>

    </div>

  );
}

export default Chat;