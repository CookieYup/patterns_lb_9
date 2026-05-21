import { NavLink, Outlet } from 'react-router-dom';
function AppLayout() {
  return <div className="app"><header className="header"><div><p className="label">Практична робота 9</p><h1>React Router для рольових сторінок</h1></div><nav className="navigation"><NavLink to="/">Головна</NavLink><NavLink to="/user">User</NavLink><NavLink to="/admin">Admin</NavLink><NavLink to="/super-admin">Super Admin</NavLink><NavLink to="/dashboard">Dashboard</NavLink></nav></header><main className="content"><Outlet /></main></div>;
}
export default AppLayout;
