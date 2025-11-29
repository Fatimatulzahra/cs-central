export default function ResourceModal({ isOpen, onClose, resource }) {
  if (!isOpen || !resource) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-96">
        
        <h2 className="text-2xl font-bold mb-4 text-emerald-700">
          {resource.title}
        </h2>

        <p className="text-gray-700 mb-4">
          {resource.description}
        </p>

        <a
          href={resource.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-center py-2 rounded-lg shadow mb-3"
        >
          Visit Resource
        </a>

        <button
          onClick={onClose}
          className="w-full text-emerald-600 font-medium"
        >
          Close
        </button>
      </div>
    </div>
  );
}
