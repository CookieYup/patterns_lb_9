import { Link } from 'react-router-dom';
function NotFoundPage() { return <section className="card"><p className="label">404</p><h2>Сторінку не знайдено</h2><p>Такого маршруту не існує.</p><Link className="button-link" to="/">Повернутися на головну</Link></section>; }
export default NotFoundPage;
