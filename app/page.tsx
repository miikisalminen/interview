"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();
  const [roomCode, setRoomCode] = useState("");

  const handleJoin = () => {
    router.push(`/room/${roomCode}`);
  };

  const handleCreate = () => {
    alert("Coming soon!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Welcome</h1>
      <input
        type="text"
        placeholder="Enter chatroom code"
        value={roomCode}
        onChange={(e) => setRoomCode(e.target.value)}
        className="border border-gray-300 p-2 rounded mb-4"
      />
      <button
        onClick={handleJoin}
        className="bg-white-500 text-black border-2 border-black px-4 py-2 rounded m-2"
      >
        Join Chatroom
      </button>
      <h2 className="text-xl">Or</h2>
      <button
        onClick={handleCreate}
        className="bg-white-500 text-black border-2 border-black px-4 py-2 rounded"
      >
        Create Chatroom
      </button>
    </div>
  );
}
