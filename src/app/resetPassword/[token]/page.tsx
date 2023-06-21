'use client';

import ResetPasswordForm from '../components/FormResetPassword';

export default function ResetPassword({
  params
}: {
  params: { token: string };
}) {
  return (
    <main>
      <ResetPasswordForm token={params.token} />
    </main>
  );
}
