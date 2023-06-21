'use client';

import ResetPasswordForm from '../components/FormResetPassword';

export default function ResetPassword({
  params
}: {
  params: { token: string };
}) {
  return (
    <main className="flex min-h-screen bg-gray-100  items-center  justify-center">
      <ResetPasswordForm token={params.token} />
    </main>
  );
}
