const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());
let users = [
  { id: 1, name: 'User1', email: 'user@example.com', role: 'USER', status: 'active', warnings: 0 },
  { id: 2, name: 'Adm1', email: 'adm@example.com', role: 'ADMIN', status: 'active', warnings: 0 },
  { id: 3, name: 'SuperAdmin1', email: 'superadmin@example.com', role: 'SUPER_ADMIN', status: 'active', warnings: 0 },
  { id: 4, name: 'User2', email: 'user2@example.com', role: 'USER', status: 'active', warnings: 1 }
];
app.get('/api/health', (req, res) => res.json({ message: 'Express server is working', status: 'ok' }));
app.get('/api/users', (req, res) => res.json(users));
app.get('/api/users/:id', (req, res) => {
  const user = users.find(item => item.id === Number(req.params.id));
  if (!user) return res.status(404).json({ message: 'Користувача не знайдено' });
  res.json(user);
});
app.post('/api/users/:id/warning', (req, res) => {
  const user = users.find(item => item.id === Number(req.params.id));
  if (!user) return res.status(404).json({ message: 'Користувача не знайдено' });
  user.warnings += 1;
  console.log(`Admin added warning to ${user.name}. Warnings: ${user.warnings}`);
  res.json({ message: 'Попередження додано', user });
});
app.patch('/api/users/:id/role', (req, res) => {
  const { role } = req.body;
  const availableRoles = ['USER', 'ADMIN', 'SUPER_ADMIN'];
  const user = users.find(item => item.id === Number(req.params.id));
  if (!user) return res.status(404).json({ message: 'Користувача не знайдено' });
  if (!availableRoles.includes(role)) return res.status(400).json({ message: 'Некоректна роль користувача' });
  user.role = role;
  console.log(`Super Admin changed role for ${user.name} to ${role}`);
  res.json({ message: 'Роль оновлено', user });
});
app.listen(PORT, () => console.log(`Backend is running on http://localhost:${PORT}`));
