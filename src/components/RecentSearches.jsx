import { useEffect, useState } from "react";

export default function RecentSearches({ onSelect }) {
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecent(stored);
  }, []);

  const handleClick = (city) => onSelect(city);

  return (
    <div className="mt-6 w-80">
      <h3 className="text-lg font-medium text-gray-700 mb-2">Recent Searches</h3>
      <ul className="space-y-2">
        {recent.length > 0 ? (
          recent.map((city, index) => (
            <li
              key={index}
              onClick={() => handleClick(city)}
              className="cursor-pointer bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg px-3 py-2 transition"
            >
              {city}
            </li>
          ))
        ) : (
          <li className="text-gray-400 text-sm">No recent searches yet.</li>
        )}
      </ul>
    </div>
  );
}
