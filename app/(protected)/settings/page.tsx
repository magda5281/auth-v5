'use client';
import { Button } from '@/components/ui/button';
import { useSession, signOut } from 'next-auth/react';

const SettingsPage = () => {
  const session = useSession({ required: true });
  const { data, status, update } = session;

  const onClick = () => {
    signOut();
  };
  return (
    <div>
      {status === 'authenticated' ? JSON.stringify(data) : 'Loading...'}

      <Button type='submit' onClick={onClick}>
        Sign out
      </Button>
    </div>
  );
};

export default SettingsPage;
