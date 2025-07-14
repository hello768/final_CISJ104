import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import VehicleSearch from "./pages/customer/vehicleSearch";
// import OrderHistory from "./pages/customer/OrderHistory";
// import ReviewPage from "./pages/customer/ReviewPage";
// import AccountPage from "./pages/customer/AccountPage";
// import PromotionPage from "./pages/customer/PromotionPage";
// import SupportPage from "./pages/customer/SupportPage";
// import ShippingPage from "./pages/customer/ShippingPage";
// import PaymentPage from "./pages/customer/PaymentPage";
// import SellRequestPage from "./pages/customer/SellRequestPage";

// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import LoginPage from "./pages/Loginpage"
// // import RegisterPage from "./pages/RegisterPage"
// import AdminDashboard from "./pages/admin/AdminDash"
// import CustomerDashboard from "./pages/customer/Customerdash"

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//         <Route path="/customer" element={<CustomerDashboard />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }



// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminDashboard from "./pages/admin/AdminDash";
import CustomerDashboard from "./pages/customer/CustomerDash";
import VehicleManagement from "./pages/admin/VehicleManagement";

// import các trang customer
import VehicleSearch from "./pages/customer/vehicleSearch";
import OrderHistory from "./pages/customer/OrderHistory";
import ReviewPage from "./pages/customer/ReviewPage";
import AccountPage from "./pages/customer/AccountPage";
import PromotionPage from "./pages/customer/PromotionPage";
import SupportPage from "./pages/customer/SupportPage";
import ShippingPage from "./pages/customer/ShippingPage";
import PaymentPage from "./pages/customer/PaymentPage";
import SellRequestPage from "./pages/customer/SellRequestPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Trang chính */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/vehicles" element={<VehicleManagement />} />

        {/* Customer */}
        <Route path="/customer" element={<CustomerDashboard />} />
        <Route path="/customer/vehicles" element={<VehicleSearch />} />
        <Route path="/customer/orders" element={<OrderHistory />} />
        <Route path="/customer/reviews" element={<ReviewPage />} />
        <Route path="/customer/account" element={<AccountPage />} />
        <Route path="/customer/promotions" element={<PromotionPage />} />
        <Route path="/customer/support" element={<SupportPage />} />
        <Route path="/customer/shipping" element={<ShippingPage />} />
        <Route path="/customer/payments" element={<PaymentPage />} />
        <Route path="/customer/sell-request" element={<SellRequestPage />} />
      </Routes>
    </BrowserRouter>
  );
}
