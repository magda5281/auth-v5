import React from 'react';

interface HeaderProps {
  label: string;
}
export const Header = ({ label }: HeaderProps) => {
  return (
    <div className='font-primary w-full flex flex-col gap-y-4 items-center '>
      <h1 className='text-3xl font-semibold font-primary'> 🔐 Auth</h1>
      <p className='text-muted-foreground text-sm'>{label}</p>
    </div>
  );
};
