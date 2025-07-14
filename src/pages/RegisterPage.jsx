import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'

export default function RegisterPage() {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Đăng ký tài khoản</h1>
        <form className="space-y-4 max-w-md">
          <input type="text" placeholder="Họ và tên" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
          <input type="password" placeholder="Mật khẩu" className="w-full p-2 border rounded" />
          <input type="password" placeholder="Xác nhận mật khẩu" className="w-full p-2 border rounded" />
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Đăng ký</button>
        </form>
      </div>
    );
  }