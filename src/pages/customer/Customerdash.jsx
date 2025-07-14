// src/pages/customer/CustomerDashboard.jsx
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'
export default function CustomerDashboard() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Customer Dashboard</h1>
      <ul className="space-y-2">
        <li><Link className="text-blue-600" to="/customer/vehicles">Tìm kiếm xe</Link></li>
        <li><Link className="text-blue-600" to="/customer/orders">Lịch sử đơn hàng</Link></li>
        <li><Link className="text-blue-600" to="/customer/reviews">Đánh giá xe</Link></li>
        <li><Link className="text-blue-600" to="/customer/account">Tài khoản cá nhân</Link></li>
        <li><Link className="text-blue-600" to="/customer/promotions">Khuyến mãi</Link></li>
        <li><Link className="text-blue-600" to="/customer/support">Hỗ trợ</Link></li>
        <li><Link className="text-blue-600" to="/customer/shipping">Theo dõi giao xe</Link></li>
        <li><Link className="text-blue-600" to="/customer/payments">Thanh toán</Link></li>
        <li><Link className="text-blue-600" to="/customer/sell-request">Nhờ bán xe hộ</Link></li>
      </ul>
    </div>
  );
}
