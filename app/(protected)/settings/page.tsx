'use client';
import { logout } from '@/actions/logout';
import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/hooks/useCurrentUser';

const SettingsPage = () => {
  const user = useCurrentUser();

  const onClick = () => {
    logout();
  };
  return (
    <div>
      <Button type='submit' onClick={onClick}>
        Sign out
      </Button>
    </div>
  );
};

export default SettingsPage;
