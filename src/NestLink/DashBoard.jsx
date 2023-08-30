import React from 'react';
import { Link, Route, Routes, Outlet } from 'react-router-dom';
import './DashBoard.css';

export default function DashBoard() {
    return (
        <div className="dashboard">
            <div className="dashboard-links">
                <Link to="/dashboard/account">Account</Link>
                <Link to="/dashboard/profile">Profile</Link>
            </div>
            <div className="dashboard-content">
                <Outlet />
            </div>
        </div>
    );
}
