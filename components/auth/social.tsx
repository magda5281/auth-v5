'use client';

import { FcGoogle } from 'react-icons/fc';
import { Button } from '../ui/button';
import { FaGithub } from 'react-icons/fa';

export const Social = () => {
  return (
    <div className='flex  gap-x-2 w-full'>
      <Button size='lg' className='w-1/2' variant='outline' onClick={() => {}}>
        <FcGoogle className='h-5 w-5' />
      </Button>
      <Button size='lg' variant='outline' onClick={() => {}} className='w-1/2'>
        <FaGithub className='h-5 w-5' />
      </Button>
    </div>
  );
};
