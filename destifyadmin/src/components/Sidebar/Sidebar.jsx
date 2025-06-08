// src/components/Sidebar/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiGrid, FiPlusSquare, FiBox } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-brand">Destify</h2>
      <nav className="sidebar-nav">
        <NavLink to="/" end>
          <FiGrid /> All Packages
        </NavLink>
        <NavLink to="/add">
          <FiPlusSquare /> Add Package
        </NavLink>
        <NavLink to="/orders">
          <FiBox /> Bookings
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;