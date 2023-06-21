'use client';
import { useRouter } from 'next/navigation';
import { createContext, useState } from 'react';

import { LoginData } from 'app/login/components/FormLogin/validator';
import { UserData } from 'app/register/components/FormRegister/validator';
import {
  ResetPasswordData,
  SendEmailResetPasswordData
} from 'app/resetPassword/components/FormResetPassword/validator';

import { setCookie } from 'nookies';
import api from 'service/api';

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthValue {
  LoginFunction: (data: LoginData) => void;
  RegisterFunction: (data: any) => void;
  is_advertiser: () => void;
  isModal: boolean;
  sendEmail: (sendEmailResetPasswordData: SendEmailResetPasswordData) => void;
  resetPassword: (resetPasswordData: ResetPasswordData, token: string) => void;
}

export const AuthContext = createContext<AuthValue>({} as AuthValue);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const [isModal, setIsModal] = useState(true);

  const is_advertiser = () => {
    const radios: any = document.getElementById('is_advertiser');

    return radios.checked;
  };

  const RegisterFunction = async (data: UserData) => {
    try {
      data.is_advertiser = is_advertiser();

      const response = await api.post('/users', data);
      setIsModal(!isModal);
    } catch (error) {
      setIsModal(false);
      console.log(error);
    }
  };

  const LoginFunction = async (data: LoginData) => {
    try {
      const response = await api.post('/login', data);
      const { token } = response.data;

      api.defaults.headers.common.authorization = `Bearer ${token}`;

      setCookie(null, 'user.Token', token, {
        maxAge: 60 * 1500,
        path: '/'
      });

      setTimeout(() => {
        router.push('/user_profile');
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const sendEmail = (
    sendEmailResetPasswordData: SendEmailResetPasswordData
  ) => {
    api
      .post('/users/resetPassword', sendEmailResetPasswordData)
      .then(() => {
        console.log('Email enviado com sucesso !');
        router.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const resetPassword = (
    resetPasswordData: ResetPasswordData,
    token: string
  ) => {
    api
      .patch(`/users/resetPassword/${token}`, {
        password: resetPasswordData.password
      })
      .then(() => {
        console.log('Senha atualizada com sucesso !');
        router.push('/login');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        LoginFunction,
        RegisterFunction,
        is_advertiser,
        isModal,
        sendEmail,
        resetPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
