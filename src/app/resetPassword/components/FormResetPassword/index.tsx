import { useForm } from 'react-hook-form';

import Input from 'app/components/Input';

import { ResetPasswordData, resetPasswordSchema } from './validator';

import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from 'hooks';

interface ResetPasswordFormProps {
  token: string;
}

const ResetPasswordForm = ({ token }: ResetPasswordFormProps) => {
  const { register, handleSubmit } = useForm<ResetPasswordData>({
    resolver: zodResolver(resetPasswordSchema)
  });

  const { resetPassword } = useAuth();

  const onFormSubmit = (formData: ResetPasswordData) => {
    console.log(formData);
    console.log(token);
    resetPassword(formData, token);
  };

  return (
    <div className="max-w-md w-full border-2 bg-white  rounded-md  p-8 bg-cover bg-center max-lg:w-3/4 max-sm:w-3/4">
      <div className="flex w-2/2 justify-between items-center ">
        <h2 className="text-2xl font-bold  mb-6">Login</h2>
      </div>

      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="flex flex-col gap-4"
      >
        <Input
          type="password"
          id="password"
          placeholder="Digite a nova senha"
          label="Nova senha"
          className="input-style w-full"
          {...register('password')}
        />

        <Input
          type="password"
          id="newPassword"
          placeholder="Digite novamente a senha"
          label="Confirme a senha"
          className="input-style w-full"
          {...register('passwordConfirm')}
        />

        <div className="flex flex-col gap-4 items-center justify-between">
          <button
            type="submit"
            className="btn-primary relative top-0 left-0 w-3/4"
          >
            Atualizar a senha
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
