export default function Card({ img, title, buttonLabel = "RSVP", onClick }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl w-72 h-80 p-5 flex flex-col items-center justify-between text-center border border-emerald-100 dark:border-gray-700 transform hover:scale-105 transition-all duration-300">
      <img
        src={img}
        alt={title}
        className="w-40 h-40 object-cover rounded-xl mb-3"
      />

      <h2 className="text-xl font-semibold text-emerald-800 dark:text-emerald-400 mb-2 font-inter">
        {title}
      </h2>

      <button
        onClick={onClick}
        className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white font-semibold px-5 py-2 rounded-full shadow transition"
      >
        {buttonLabel}
      </button>
    </div>
  );
}
