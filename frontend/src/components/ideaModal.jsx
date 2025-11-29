import { useState } from "react";

export default function IdeaModal({ isOpen, onClose, onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [idea, setIdea] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, idea });
    setName("");
    setEmail("");
    setIdea("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white w-96 p-6 rounded-xl shadow-xl">
        <h2 className="text-2xl text-emerald-700 font-bold text-center mb-4">
          Share Your Idea 💡
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

          <textarea
            placeholder="Explain your idea..."
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            className="w-full border p-2 rounded h-28"
            required
          />

          <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg font-semibold">
            Submit
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
