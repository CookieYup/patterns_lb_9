import { NavLink, Outlet } from 'react-router-dom';
function DashboardPage() { return <section className="card"><p className="label">Вкладені маршрути</p><h2>Панель керування</h2><p>Цей розділ демонструє вкладену маршрутизацію React Router.</p><nav className="sub-navigation"><NavLink to="overview">Огляд</NavLink><NavLink to="users">Користувачі</NavLink><NavLink to="settings">Налаштування</NavLink></nav><Outlet /></section>; }
export default DashboardPage;
