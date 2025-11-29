import { useState } from "react";

export default function RSVPModal({ isOpen, onClose, eventTitle, onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, event: eventTitle });
    setName("");
    setEmail("");
    onClose();
  };

  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-96">
        <h2 className="text-2xl font-bold mb-4 text-center text-emerald-700">
          RSVP for {eventTitle}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />

          <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg font-semibold">
            Submit RSVP
          </button>
        </form>

        <button
          onClick={onClose}
          className="mt-4 w-full text-emerald-600 font-medium"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
