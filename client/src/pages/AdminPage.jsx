import { useEffect, useState } from 'react';
import { addWarning, getUsers } from '../api/api.js';
import Loader from '../components/Loader.jsx';
import UserTable from '../components/UserTable.jsx';
function AdminPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  async function loadUsers() { const data = await getUsers(); setUsers(data); }
  async function handleWarning(userId) { await addWarning(userId); await loadUsers(); }
  useEffect(() => { loadUsers().finally(() => setIsLoading(false)); }, []);
  if (isLoading) return <Loader />;
  return <section className="card"><p className="label">/admin</p><h2>Вікно адміністратора</h2><p>Адміністратор переглядає список користувачів та може додавати попередження через запит до Express-сервера.</p><UserTable users={users} mode="admin" onWarning={handleWarning} /></section>;
}
export default AdminPage;
