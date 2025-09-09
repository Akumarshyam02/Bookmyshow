import { useState } from "react";
import { X, MapPin } from "lucide-react";

export default function LocationModal({ open, onClose }) {
  const [search, setSearch] = useState("");
  const cities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Kolkata",
    "Chennai",
    "Pune",
    "Hyderabad",
    "Jaipur",
    "Lucknow",
    "Ahmedabad",
  ];

  // Filter logic
  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(search.toLowerCase())
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 pt-0.5">
      <div className="bg-white w-[1200px] rounded-lg shadow-lg p-6 relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-semibold">Select Your City</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-500 hover:text-black" />
          </button>
        </div>

        
        <input
          type="text"
          placeholder="Enter your city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
          className="w-full border border-gray-300 rounded px-3 py-2 mb-5 focus:outline-none focus:ring-2 text-black focus:ring-red-500"
        />

        
        <button className="flex items-center gap-2 text-gray-700 mb-5">
          <MapPin className="w-4 h-4 text-gray-600" />
          Auto Detect Location
        </button>

        {/* Cities List */}
        <div className="max-h-48 overflow-y-auto">
          {filteredCities.length > 0 ? (
            filteredCities.map((city) => (
              <button
                key={city}
                onClick={() => {
                  alert(`Selected: ${city}`);
                  onClose();
                }}
                className="block w-full text-left px-3 py-2 text-gray-800 hover:bg-gray-100 rounded"
              >
                {city}
              </button>
            ))
          ) : (
            <p className="text-gray-500">No cities found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
