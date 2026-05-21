import { useEffect, useState } from 'react';
import { changeUserRole, getUsers } from '../api/api.js';
import Loader from '../components/Loader.jsx';
import UserTable from '../components/UserTable.jsx';
function SuperAdminPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  async function loadUsers() { const data = await getUsers(); setUsers(data); }
  async function handleRoleChange(userId, role) { await changeUserRole(userId, role); await loadUsers(); }
  useEffect(() => { loadUsers().finally(() => setIsLoading(false)); }, []);
  if (isLoading) return <Loader />;
  return <section className="card"><p className="label">/super-admin</p><h2>Вікно супер адміністратора</h2><p>Супер адміністратор має розширені права та може змінювати ролі користувачів у системі.</p><UserTable users={users} mode="super-admin" onChangeRole={handleRoleChange} /></section>;
}
export default SuperAdminPage;
