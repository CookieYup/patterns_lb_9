import { useEffect, useState } from 'react';
import { getUsers } from '../api/api.js';
import Loader from '../components/Loader.jsx';
function UserPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => { getUsers().then((data) => setUsers(data.filter((user) => user.role === 'USER'))).finally(() => setIsLoading(false)); }, []);
  if (isLoading) return <Loader />;
  return <section className="card"><p className="label">/user</p><h2>Вікно користувача</h2><p>Користувач бачить базову інформацію про свій профіль та доступні можливості без адміністративних функцій.</p><div className="profile-grid">{users.map((user) => <article className="profile-card" key={user.id}><h3>{user.name}</h3><p>{user.email}</p><span>{user.role}</span></article>)}</div></section>;
}
export default UserPage;
