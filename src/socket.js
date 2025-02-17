import { io } from "socket.io-client";

const socket = io("https://portfolio-backend1-rcsm.onrender.com", {
  transports: ["websocket", "polling"],  // Ensure WebSocket is used
  withCredentials: true
});

export default socket;
