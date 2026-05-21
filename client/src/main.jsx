import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import UserPage from './pages/UserPage.jsx';
import AdminPage from './pages/AdminPage.jsx';
import SuperAdminPage from './pages/SuperAdminPage.jsx';
import DashboardPage from './pages/dashboard/DashboardPage.jsx';
import DashboardOverview from './pages/dashboard/DashboardOverview.jsx';
import DashboardUsers from './pages/dashboard/DashboardUsers.jsx';
import DashboardSettings from './pages/dashboard/DashboardSettings.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import './style.css';
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="super-admin" element={<SuperAdminPage />} />
          <Route path="dashboard" element={<DashboardPage />}>
            <Route index element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<DashboardOverview />} />
            <Route path="users" element={<DashboardUsers />} />
            <Route path="settings" element={<DashboardSettings />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
