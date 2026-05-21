export async function getUsers() {
  const response = await fetch('/api/users');
  if (!response.ok) throw new Error('Не вдалося отримати користувачів');
  return response.json();
}
export async function addWarning(userId) {
  const response = await fetch(`/api/users/${userId}/warning`, { method: 'POST' });
  if (!response.ok) throw new Error('Не вдалося додати попередження');
  return response.json();
}
export async function changeUserRole(userId, role) {
  const response = await fetch(`/api/users/${userId}/role`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ role }) });
  if (!response.ok) throw new Error('Не вдалося змінити роль');
  return response.json();
}
