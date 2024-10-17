import { createRoom } from "./actions";

export default function RoomCreationForm() {
  return (
    <form className="flex flex-col" action={createRoom}>
      <input
        type="text"
        placeholder="Untitled meeting"
        required
        name="name"
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
}
