"use client";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { code: string } }) {
  interface Room {
    id: number;
    code: string;
    created_at: string;
    updated_at: string;
    name: string;
  }

  const [room, setRoom] = useState<Room | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRoom = async () => {
      if (params.code) {
        try {
          const response = await fetch(`/api/room?code=${params.code}`);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setRoom(data.rows[0]);
        } catch (err: any) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchRoom();
  }, [params.code]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!room) {
    return <p>Nothing here! Whoops...</p>;
  }

  return (
    <div>
      <h1 className="text-2xl">Welcome to room: {room?.name}</h1>
      <p>ID: {room?.id} join code: {room?.code}</p>
      <p>created at: {room?.created_at} updated at: {room?.updated_at}</p>
    </div>
  );
}
