import React, { useState } from "react";
import { vehicles as initialVehicles } from "../../data/vehicleData";

export default function VehicleSearch() {
  const [query, setQuery] = useState("");
  const filteredVehicles = initialVehicles.filter((v) => v.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Tìm kiếm xe</h1>
      <input
        className="input mb-4"
        placeholder="Nhập tên xe..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="space-y-2">
        {filteredVehicles.map((v) => (
          <li key={v.id} className="p-2 border rounded">
            {v.name} - ${v.price} - {v.status}
          </li>
        ))}
      </ul>
    </div>
  );
}