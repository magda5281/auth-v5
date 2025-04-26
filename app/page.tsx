import { LoginButton } from '@/components/auth/login-button';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <main className='flex h-full flex-col items-center justify-center bg-radial from-sky-400 to-blue-800'>
      <div className='space-y-6 text-center'>
        <h1
          className={cn(
            'text-6xl font-semibold text-white drop-shadow-md font-poppins'
          )}
        >
          🔐 Auth
        </h1>
        <p className='text-white text-center text-lg'>
          A simple authentication service
        </p>
        <div>
          <LoginButton asChild mode={'modal'}>
            <Button variant='secondary' size='lg'>
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
