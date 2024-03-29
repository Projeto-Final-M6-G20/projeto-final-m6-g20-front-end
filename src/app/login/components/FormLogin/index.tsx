'use client';
import Link from 'next/link';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';

import Input from 'app/components/Input';
import CustomModal from 'app/components/Modal';

import SendEmailForm from '../FormSendEmail';
import { LoginData, LoginSchema } from './validator';

import { Button, useDisclosure } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserContext } from 'context/UserContext';
import { useAuth } from 'hooks';

const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema)
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { LoginFunction } = useAuth();
  const { getUser } = useContext(UserContext);

  return (
    <div className="max-w-md w-full border-2 bg-white  rounded-md  p-8 bg-cover bg-center max-lg:w-3/4 max-sm:w-3/4">
      <div className="flex w-2/2 justify-between items-center ">
        <h2 className="text-2xl font-bold  mb-6">Login</h2>
      </div>

      <form
        onSubmit={handleSubmit(LoginFunction)}
        className="flex flex-col gap-4"
      >
        <Input
          type="email"
          id="email"
          placeholder="Digitar Email"
          label="Email"
          className="input-style w-full"
          {...register('email')}
        />

        <Input
          type="password"
          id="password"
          placeholder="Digitar senha"
          label="Senha"
          className="input-style w-full"
          {...register('password')}
        />

        <div className="w-full flex justify-end items-end">
          <Button onClick={onOpen} className="text-gray-500">
            Esqueci minha senha
          </Button>
        </div>

        <div className="flex flex-col gap-4 items-center justify-between">
          <button
            type="submit"
            onClick={() => getUser()}
            className="btn-primary relative top-0 left-0 w-3/4"
          >
            Enviar
          </button>
          <span className="text-gray-500">Ainda não possui uma conta?</span>
          <Link
            href={'/register'}
            type="button"
            className="btn-form text-center w-3/4"
          >
            Cadastrar
          </Link>
        </div>
      </form>
      <CustomModal
        isOpen={isOpen}
        onClose={onClose}
        MaxWidthBody="90%"
        MaxWidthHeader="90%"
        widthBody="600px"
        widthHeader="600px"
      >
        <SendEmailForm />
      </CustomModal>
    </div>
  );
};

export default LoginForm;
