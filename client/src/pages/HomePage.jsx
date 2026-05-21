import { Link } from 'react-router-dom';
function HomePage() {
  return <section className="card hero"><p className="label">React Router</p><h2>Маршрутизація сторінок без перезавантаження браузера</h2><p>У цьому застосунку сторінки для User, Admin і Super Admin реалізовані як окремі React-компоненти та відкриваються за допомогою маршрутів.</p><div className="actions"><Link className="button-link" to="/user">Відкрити User</Link><Link className="button-link" to="/admin">Відкрити Admin</Link><Link className="button-link" to="/super-admin">Відкрити Super Admin</Link></div></section>;
}
export default HomePage;
