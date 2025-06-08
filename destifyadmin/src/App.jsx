import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import AllPackagesPage from './pages/AllPackagesPage/AllPackagesPage';
import AddPackagePage from './pages/AddPackagePage/AddPackagePage';
import OrdersPage from './pages/OrdersPage/OrdersPage';
import './index.css'; // We'll create this next

const AdminLayout = () => (
  <div className="admin-layout">
    <Sidebar />
    <main className="admin-content">
      <Outlet />
    </main>
  </div>
);

function App() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/" element={<AllPackagesPage />} />
        <Route path="/add" element={<AddPackagePage />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Route>
    </Routes>
  );
}

export default App;