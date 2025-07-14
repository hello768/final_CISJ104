import React, { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if (email === "admin@example.com") {
      navigate("/admin")
    } else {
      navigate("/customer")
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Đăng nhập</h2>
        <input type="email" placeholder="Email" className="input mb-2" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Mật khẩu" className="input mb-4" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">Đăng nhập</button>
      </form>
    </div>
  )
}
