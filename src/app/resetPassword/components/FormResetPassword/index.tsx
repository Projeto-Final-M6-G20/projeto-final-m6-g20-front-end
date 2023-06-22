import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiShow, BiHide } from 'react-icons/bi';

import Input from 'app/components/Input';

import { ResetPasswordData, resetPasswordSchema } from './validator';

import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from 'hooks';

interface ResetPasswordFormProps {
  token: string;
}

interface ShowPasswordState {
  password: boolean;
  passwordConfirm: boolean;
}

const ResetPasswordForm = ({ token }: ResetPasswordFormProps) => {
  const { register, handleSubmit } = useForm<ResetPasswordData>({
    resolver: zodResolver(resetPasswordSchema)
  });

  const { resetPassword } = useAuth();
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [showPassword, setShowPassword] = useState<ShowPasswordState>({
    password: false,
    passwordConfirm: false
  });

  const onFormSubmit = (formData: ResetPasswordData) => {
    if (formData.password !== formData.passwordConfirm) {
      setPasswordsMatch(false);
      return;
    }

    resetPassword(formData, token);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === 'passwordConfirm') {
      setPasswordConfirm(value);
      setPasswordsMatch(value === password);
    } else if (name === 'password') {
      setPassword(value);
      setPasswordsMatch(passwordConfirm === value);
    }
  };

  const toggleShowPassword = (inputName: keyof ShowPasswordState) => {
    setShowPassword((prevShowPassword) => ({
      ...prevShowPassword,
      [inputName]: !prevShowPassword[inputName]
    }));
  };

  return (
    <div className="max-w-md w-full border-2 bg-white rounded-md p-8 bg-cover bg-center max-lg:w-3/4 max-sm:w-3/4">
      <div className="flex w-2/2 justify-between items-center ">
        <h2 className="text-2xl font-bold mb-6">Redefinição de senha</h2>
      </div>

      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="relative flex items-center">
          <Input
            type={showPassword.password ? 'text' : 'password'}
            id="password"
            placeholder="Digite a nova senha"
            label="Nova senha"
            className="input-style w-full pr-12"
            {...register('password')}
            onChange={handlePasswordChange}
          />
          <div
            className="absolute right-3 bottom-2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => toggleShowPassword('password')}
          >
            {showPassword.password ? (
              <BiHide size={20} />
            ) : (
              <BiShow size={20} />
            )}
          </div>
        </div>

        <div className="relative flex items-center">
          <Input
            type={showPassword.passwordConfirm ? 'text' : 'password'}
            id="newPassword"
            placeholder="Digite novamente a senha"
            label="Confirme a senha"
            className="input-style w-full pr-12"
            {...register('passwordConfirm')}
            onChange={handlePasswordChange}
          />
          <div
            className="absolute right-3 bottom-2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => toggleShowPassword('passwordConfirm')}
          >
            {showPassword.passwordConfirm ? (
              <BiHide size={20} />
            ) : (
              <BiShow size={20} />
            )}
          </div>
        </div>

        {!passwordsMatch && (
          <p className="text-red-500">As senhas precisam ser iguais</p>
        )}

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
