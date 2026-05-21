import { useEffect, useState } from 'react';
import { getUsers } from '../../api/api.js';
import Loader from '../../components/Loader.jsx';
import UserTable from '../../components/UserTable.jsx';
function DashboardUsers() { const [users, setUsers] = useState([]); useEffect(() => { getUsers().then(setUsers); }, []); if (users.length === 0) return <Loader message="Завантаження користувачів..." />; return <div className="nested-card"><h3>Користувачі</h3><UserTable users={users} /></div>; }
export default DashboardUsers;
