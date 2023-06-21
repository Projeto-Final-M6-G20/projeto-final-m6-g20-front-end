import { useForm } from 'react-hook-form';

import {
  SendEmailResetPasswordData,
  sendEmailResetPasswordSchema
} from '../../../resetPassword/components/FormResetPassword/validator';
import Input from 'app/components/Input';

import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from 'hooks';

const SendEmailForm = () => {
  const { register, handleSubmit } = useForm<SendEmailResetPasswordData>({
    resolver: zodResolver(sendEmailResetPasswordSchema)
  });

  const { sendEmail } = useAuth();

  const onFormSubmit = (formData: SendEmailResetPasswordData) => {
    sendEmail(formData);
  };

  return (
    <div className="max-w-md w-full border-2 bg-white  rounded-md  p-8 bg-cover bg-center max-lg:w-3/4 max-sm:w-3/4">
      <div className="flex w-2/2 justify-between items-center "></div>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="flex flex-col gap-4"
      >
        <Input
          type="email"
          id="email"
          placeholder="Digite seu email"
          label="Informe um email valido para recuperação de senha"
          className="input-style w-full"
          {...register('email')}
        />
        <div className="flex flex-col gap-4 items-center justify-between">
          <button
            type="submit"
            className="btn-primary relative top-0 left-0 w-3/4"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendEmailForm;
