// components/SearchBar.js
export default function SearchBar() {
  return (
    <div className="flex items-center justify-between mb-4">
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 rounded px-4 py-2 w-1/3"
      />
      <button className="ml-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Filter
      </button>
    </div>
  );
}
