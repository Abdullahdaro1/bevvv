import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { signIn } from '@/lib/auth';
import { RoleSelector } from '../components/loging/RoleSelector';


export default function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center items-start md:items-center p-8">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Sign in with your GitHub or Google account.
          </CardDescription>
        </CardHeader>
        <div className="px-6 py-4">
          <RoleSelector />
        </div>
        <CardFooter className="flex flex-col gap-4">
          <form
            action={async (formData: FormData) => {
              'use server';
              const role = formData.get('role') as string;
              await signIn('github', {
                redirectTo: '/dashboard',
                role
              });
            }}
            className="w-full"
          >
            <Button className="w-full">Sign in with GitHub</Button>
          </form>
          <form
            action={async (formData: FormData) => {
              'use server';
              const role = formData.get('role') as string;
              await signIn('google', {
                redirectTo: '/dashboard',
                role
              });
            }}
            className="w-full"
          >
            <Button className="w-full">Sign in with Google</Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
