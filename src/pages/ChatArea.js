import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("https://portfolio-backend1-rcsm.onrender.com"); // Replace with your backend URL

const ChatArea = () => {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("Recruiter");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://portfolio-backend1-rcsm.onrender.com/api/messages")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Messages:", data); // ✅ Debugging
        setMessages(data);
      });
  
    socket.on("receiveMessage", (data) => {
      console.log("New Message Received:", data); // ✅ Debugging
      setMessages((prevMessages) => [...prevMessages, data]);
    });
  
    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit("sendMessage", { name, message });
      setMessage("");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Recruiter Chat</h2>

      <div className="h-64 overflow-y-auto bg-gray-800 p-4 rounded-lg">
  {messages.length === 0 ? (
    <p className="text-center text-gray-400">No messages yet...</p>
  ) : (
    messages.map((msg, index) => (
      <div key={index} className={`p-2 my-1 rounded-lg ${msg.name === name ? "bg-blue-500 text-white self-end" : "bg-gray-700 text-white"}`}>
        <strong>{msg.name}:</strong> {msg.message}
      </div>
    ))
  )}
</div>

      <form onSubmit={sendMessage} className="mt-4 flex">
        <input
          type="text"
          className="flex-1 p-2 bg-gray-700 text-white rounded-l-lg"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit" className="px-4 bg-blue-500 rounded-r-lg hover:bg-blue-600">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatArea;
