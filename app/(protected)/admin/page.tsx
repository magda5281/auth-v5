import { currentRole } from '@/lib/auth';

const AdminPage = () => {
  const role = currentRole();
  return <div>Current role: {role}</div>;
};

export default AdminPage;
