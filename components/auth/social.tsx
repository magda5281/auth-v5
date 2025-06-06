'use client';

import { FcGoogle } from 'react-icons/fc';
import { Button } from '../ui/button';
import { FaGithub } from 'react-icons/fa';
import { signIn } from 'next-auth/react';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { useSearchParams } from 'next/navigation';
export const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');
  const onClick = (provider: 'google' | 'github') => {
    signIn(provider, { callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT });
  };
  return (
    <div className='flex  gap-x-2 w-full'>
      <Button
        size='lg'
        className='w-1/2'
        variant='outline'
        onClick={() => {
          onClick('google');
        }}
      >
        <FcGoogle className='h-5 w-5' />
      </Button>
      <Button
        size='lg'
        variant='outline'
        onClick={() => {
          onClick('github');
        }}
        className='w-1/2'
      >
        <FaGithub className='h-5 w-5' />
      </Button>
    </div>
  );
};
