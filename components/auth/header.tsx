import { cn } from '@/lib/utils';
import React from 'react';

interface HeaderProps {
  label: string;
}
export const Header = ({ label }: HeaderProps) => {
  return (
    <div
      className={cn('w-full flex flex-col gap-y-4 items-center font-poppins')}
    >
      <h1 className={cn('text-3xl font-semibold font-poppins')}> 🔐 Auth</h1>
      <p className='text-muted-foreground text-sm'>{label}</p>
    </div>
  );
};
