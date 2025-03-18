'use client';
import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';

const page = () => {
  const session = useSession();

  return (
    <div>
      {JSON.stringify(session)}
      <form
      // action={async () => {
      //   'use server';
      //   await signOut({ redirectTo: '/', redirect: true });
      // }}
      >
        <Button type='submit'>Sign out</Button>
      </form>
    </div>
  );
};

export default page;
