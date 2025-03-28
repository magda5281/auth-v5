'use client';
import UserInfo from '@/components/user-info';
import { useCurrentUser } from '@/hooks/useCurrentUser';

const ClientPage = () => {
  const user = useCurrentUser();

  return <UserInfo user={user} label={'📲 Client page'} />;
};

export default ClientPage;
