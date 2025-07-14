import { vehicles } from "../../data/vehicleData";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'
export default function VehicleManagement() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Quản lý xe</h1>
      <table className="w-full table-auto border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Tên xe</th>
            <th className="border p-2">Giá</th>
            <th className="border p-2">Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((v) => (
            <tr key={v.id}>
              <td className="border p-2">{v.name}</td>
              <td className="border p-2">${v.price}</td>
              <td className="border p-2">{v.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
