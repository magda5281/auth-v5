'use client';
import { UserButton } from '@/components/auth/user-button';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className='bg-secondary flex gap-x-2 justify-between items-center p-4 rounded-xl max-w-[600px] w-full shadow-sm'>
      <div className='flex flex-wrap gap-2 '>
        <Button
          asChild
          variant={pathname === '/client' ? 'default' : 'outline'}
        >
          <Link href={'/client'}>Client</Link>
        </Button>
        <Button
          asChild
          variant={pathname === '/server' ? 'default' : 'outline'}
        >
          <Link href={'/server'}>Server</Link>
        </Button>
        <Button asChild variant={pathname === '/admin' ? 'default' : 'outline'}>
          <Link href={'/admin'}>Admin</Link>
        </Button>
        <Button
          asChild
          variant={pathname === '/settings' ? 'default' : 'outline'}
        >
          <Link href={'/settings'}>Settings</Link>
        </Button>
      </div>
      <div className='self-start'>
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
