'use client';

import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { settings } from '@/actions/settings';
import { useTransition } from 'react';
import { useSession } from 'next-auth/react';
const SettingsPage = () => {
  const { update } = useSession();
  const [isPending, startTransition] = useTransition();
  const onClick = () => {
    startTransition(() => {
      settings({ name: 'test' }).then(() => {
        update();
      });
    });
  };
  return (
    <Card className='w-full max-w-[600px]'>
      <CardHeader className='text-2xl font-semibold text-center'>
        <p> ⚙️ Settings</p>
      </CardHeader>
      <CardContent>
        <Button onClick={onClick} disabled={isPending}>
          Update me
        </Button>
      </CardContent>
    </Card>
  );
};

export default SettingsPage;
