'use client';
import { useRouter } from 'next/navigation';
import { createContext, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import Toast from 'app/components/Toast';
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
      Toast({ message: 'Login efetuado com sucesso!', isSucess: true });

      setTimeout(() => {
        router.push('/');
      }, 1000);
    } catch (error) {
      Toast({ message: 'E-mail ou senha invalidos!' });

      console.log(error);
    }
  };

  const sendEmail = (
    sendEmailResetPasswordData: SendEmailResetPasswordData
  ) => {
    api
      .post('/users/resetPassword', sendEmailResetPasswordData)
      .then(() => {
        Toast({ message: 'Email enviado com sucesso!', isSucess: true });
        router.push('/');
      })
      .catch((err) => {
        Toast({
          message: 'Verifique se o e-mail informado é válido!',
          isSucess: false
        });
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
        Toast({ message: 'Senha atualizada com sucesso !', isSucess: true });
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
