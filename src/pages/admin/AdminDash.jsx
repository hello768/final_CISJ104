import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'
export default function AdminDashboard() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <ul className="space-y-2">
        <li><Link className="text-blue-600" to="/admin/vehicles">Quản lý xe</Link></li>
        <li><Link className="text-blue-600" to="/admin/orders">Quản lý đơn hàng</Link></li>
        <li><Link className="text-blue-600" to="/admin/payments">Quản lý thanh toán</Link></li>
        {/* Các link khác tương ứng AD-ADM... */}
      </ul>
    </div>
  )
}
