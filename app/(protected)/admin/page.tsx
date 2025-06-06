'use client';
import { admin } from '@/actions/admin';
import { RoleGate } from '@/components/auth/role-gate';
import { FormSuccess } from '@/components/form-success';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { UserRole } from '@prisma/client';
import { toast } from 'sonner';

const AdminPage = () => {
  const onServerActionClick = async () => {
    try {
      const data = await admin();
      if (data.error) toast.error(data.error, { richColors: true });
      if (data.success) toast.success(data.success, { richColors: true });
    } catch {
      toast.error('An error occurred', { richColors: true });
    }
  };
  const onApiRouteClick = () => {
    try {
      fetch('/api/admin').then((response) => {
        if (response.ok) {
          toast.success('Allowed API route!', { richColors: true });
        } else {
          toast.error('Forbidden API route', { richColors: true });
        }
      });
    } catch {
      toast.error('Network error', { richColors: true });
    }
  };
  return (
    <Card className='w-full max-w-[600px]'>
      <CardHeader>
        <p className='text-2xl font-semibold text-center'>🔑 Admin</p>
      </CardHeader>
      <CardContent className='space-y-4'>
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message='🎉 You are allowed to see this content!' />
        </RoleGate>
        <div className='flex flex-row items-center justify-between rounded-lg p-3 shadow-md'>
          <p className='text-sm font-medium'>Admin only API-route</p>
          <Button onClick={onApiRouteClick}>Click to test</Button>
        </div>
        <div className='flex flex-row items-center justify-between rounded-lg p-3 shadow-md'>
          <p className='text-sm font-medium'>Admin only Server Action</p>
          <Button onClick={onServerActionClick}>Click to test</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
